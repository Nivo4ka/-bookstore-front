import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/bookApi';
import type { FavoriteType } from '../../../../types/userTypes';

const getBooksByArray = createAsyncThunk(
  'bookSlice/getByArray',
  async (request: FavoriteType[]) => {
    try {
      const requestStr = request.map((item) => item.bookId).join();
      const data = await services.getBooksByArray(requestStr);
      return data.data.books;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default getBooksByArray;
