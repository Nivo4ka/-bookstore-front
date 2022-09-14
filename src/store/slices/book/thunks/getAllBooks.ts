import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/bookApi';
import type { FilterRequestType } from '../../../../types/filterTypes';

const getAllBooks = createAsyncThunk(
  'bookSlice/getAll',
  async (request: FilterRequestType) => {
    try {
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
