import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/bookApi';
import type { FilterRequestType } from '../../../../types/filterTypes';
import store from '../../../store';
import { changePage } from '../../filter/filterSlice';

const getAllBooks = createAsyncThunk(
  'bookSlice/getAll',
  async (request: FilterRequestType, thunkAPI) => {
    const filter = store.getState().filter;
    try {
      // const request: FilterRequestType = {
      //   sortBy: filter.sortBy.selectedSort,
      //   direction: filter.sortBy.direction,
      //   minPrice: `${filter.price.min}`,
      //   maxPrice: `${filter.price.max}`,
      // };
      // const genresStr = filter.genres.reduce((acc, item) =>
      // (item.isCheck ? (`${acc},${item.name}`) : acc), '');
      // request.genres = genresStr;
      // request.search = filter.search;
      // request.page = filter.page;
      // request.pageSize = filter.pageSize;
      const data = await services.getAllBooks(request);
      // if (data.data.count <= (+filter.pageSize * (+filter.page - 1))) {
      //   thunkAPI.dispatch(changePage('1'));
      //   request.page = '1';
      //   data = await services.getAllBooks(request);
      // }
      return data.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default getAllBooks;
