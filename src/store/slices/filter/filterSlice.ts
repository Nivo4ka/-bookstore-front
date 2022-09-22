import { createSlice } from '@reduxjs/toolkit';
import type { FilterType } from '../../../types/filterTypes';
import getGenres from './thunks/getGenres';

const initialState: FilterType = {
  genres: [],
  arrSort: [
    {
      title: 'Price',
      currentValue: 'price',
    },
    {
      title: 'Name',
      currentValue: 'title',
    },
    {
      title: 'Author name',
      currentValue: 'autor',
    },
    {
      title: 'Rating',
      currentValue: 'rating',
    }],
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGenres.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.genres = payload;
    });
  },
});

export default filterSlice.reducer;
