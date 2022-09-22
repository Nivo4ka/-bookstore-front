import { createSlice } from '@reduxjs/toolkit';
import type { BooksType, BookType } from '../../../types/bookTypes';
import thunks from './thunks/index';

const initialState: BooksType = {
  books: [],
  count: 0,
  book: {} as BookType,
};

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    deleteInfoBook: (state) => {
      state.book = {} as BookType;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.getAllBooks.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      return payload;
    });
    builder.addCase(thunks.getBookById.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.book = payload;
    });
    builder.addCase(thunks.getBooksByArray.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.books = payload;
    });
  },
});

export const { deleteInfoBook } = bookSlice.actions;

export default bookSlice.reducer;
