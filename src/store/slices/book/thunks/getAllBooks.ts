import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/book.service';
import type { IFilterRequest } from '../../../../types/filterTypes';
import store from '../../../store';

const getAllBooks = createAsyncThunk(
  'bookSlice/getAll',
  async () => {
    const filter = store.getState().filter;
    try {
      const request: IFilterRequest = {
        sortBy: filter.sortBy.selectedSort,
        direction: filter.sortBy.direction,
        minPrice: `${filter.price.min}`,
        maxPrice: `${filter.price.max}`,
      };
      const genresStr = filter.genres.reduce((acc, item) => (item.isCheck ? (`${acc},${item.name}`) : acc), '');
      request.genres = genresStr;
      request.search = filter.search;
      const data = await services.getAllBooks(request);
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
