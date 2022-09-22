import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/genreApi';

const getGenres = createAsyncThunk(
  'filterSlice/getAll',
  async () => {
    try {
      const data = await services.getGenres();
      return data.data.genres;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default getGenres;
