import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/ratingApi';

const addRating = createAsyncThunk(
  'user/addRating',
  async (value: { bookId: number; grade: number }) => {
    const data = await api.addRating(`${value.bookId}`, value.grade);
    return data.data.ratings;
  },
);

export default addRating;
