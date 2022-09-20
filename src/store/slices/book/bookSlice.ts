import { createSlice } from '@reduxjs/toolkit';
import type { BooksType, BookType } from '../../../types/bookTypes';
import getAllBooks from './thunks/getAllBooks';
import getBookById from './thunks/getBookById';
import getBooksByArray from './thunks/getBooksByArray';

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
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      if (action.payload.books) state.books = action.payload.books;
      if (action.payload.count) state.count = action.payload.count;
    });
    builder.addCase(getBookById.fulfilled, (state, action) => {
      if (action.payload.book) state.book = action.payload.book;
    });
    builder.addCase(getBooksByArray.fulfilled, (state, action) => {
      if (action.payload) state.books = action.payload;
    });
  },
});

export const { deleteInfoBook } = bookSlice.actions;

export default bookSlice.reducer;
