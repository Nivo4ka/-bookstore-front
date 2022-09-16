import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/favoriteApi';

const deleteFavorite = createAsyncThunk(
  'user/deleteFavorite',
  async (bookId: number) => {
    const data = await api.deleteFavorite(`${bookId}`);

    return data.data.favorites;
  },
);

export default deleteFavorite;
