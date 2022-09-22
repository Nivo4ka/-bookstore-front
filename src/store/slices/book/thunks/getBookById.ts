import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/bookApi';

const getBookById = createAsyncThunk(
  'bookSlice/getBookById',
  async (bookId: string) => {
    try {
      const data = await services.getBookById(bookId);
      return data.data.book;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default getBookById;
