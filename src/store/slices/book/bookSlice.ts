import { createSlice } from '@reduxjs/toolkit';
import type { IBooks } from '../../../types/bookTypes';
import getAllBooks from './thunks/getAllBooks';

const initialState: IBooks = {
  books: [],
  count: 0,
};

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      if (action.payload.books) state.books = action.payload.books;
      if (action.payload.count) state.count = action.payload.count;
    });
  },
});

export default bookSlice.reducer;
