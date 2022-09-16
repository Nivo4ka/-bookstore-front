import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/favoriteApi';

const addToFavorite = createAsyncThunk(
  'user/addFavorite',
  async (bookId: number) => {
    const data = await api.addToFavorite(`${bookId}`);

    return data.data.favorites;
  },
);

export default addToFavorite;
