import { createSlice } from '@reduxjs/toolkit';
import type { GenresType } from '../../../types/filterTypes';
import getGenres from './thunks/getGenres';

const initialState: GenresType = {
  genres: [],
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      if (action.payload) state.genres = action.payload;
    });
  },
});

export default filterSlice.reducer;
