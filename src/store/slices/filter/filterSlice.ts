// import type { PayloadAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { FilterType, PriceType } from '../../../types/filterTypes';

const initialState: FilterType = {
  genres:
    [{
      name: 'Fiction',
      isCheck: false,
    },
    {
      name: 'Non—fiction',
      isCheck: false,
    },
    {
      name: 'Light fiction',
      isCheck: false,
    },
    {
      name: 'Science-fiction',
      isCheck: false,
    },
    {
      name: 'Fantasy',
      isCheck: false,
    },
    {
      name: 'Business & Finance',
      isCheck: false,
    },
    {
      name: 'Politics',
      isCheck: false,
    },
    {
      name: 'Travel books',
      isCheck: false,
    },
    {
      name: 'Autobiography',
      isCheck: false,
    },
    {
      name: 'History',
      isCheck: false,
    },
    {
      name: 'Thriller / Mystery',
      isCheck: false,
    },
    {
      name: 'Romance',
      isCheck: false,
    },
    {
      name: 'Satire',
      isCheck: false,
    },
    {
      name: 'Horror',
      isCheck: false,
    },
    {
      name: 'Health / Medicine',
      isCheck: false,
    },
    {
      name: 'Children’s books',
      isCheck: false,
    },
    {
      name: 'Encyclopedia',
      isCheck: false,
    }],
  price: {
    min: 1.0,
    max: 100.0,
  },
  sortBy: {
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
      },
      {
        title: 'Date of issue',
        currentValue: 'creationDate',
      }],
    direction: 'asc',
    selectedSort: 'price',
  },
  search: '',
  page: '1',
  pageSize: '8',
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    changeGenres: (state, action: PayloadAction<number>) => {
      if (action.payload < state.genres.length) {
        state.genres[action.payload].isCheck = !state.genres[action.payload].isCheck;
      }
    },
    changeSortBy: (state, action: PayloadAction<number>) => {
      if (state.sortBy.selectedSort === state.sortBy.arrSort[action.payload].currentValue) {
        state.sortBy.direction = state.sortBy.direction === 'desc' ? 'asc' : 'desc';
      } else {
        state.sortBy.selectedSort = state.sortBy.arrSort[action.payload].currentValue;
        state.sortBy.direction = 'asc';
      }
    },
    changePrice: (state, action: PayloadAction<PriceType>) => {
      state.price.min = action.payload.min;
      state.price.max = action.payload.max;
    },
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    changePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    changePageBack: (state) => {
      if (+state.page > 1) {
        state.page = `${+state.page - 1}`;
      }
    },
    changePageForward: (state) => {
      state.page = `${+state.page + 1}`;
    },

  },
});

export const {
  changeGenres,
  changeSortBy,
  changePrice,
  changeSearch,
  changePage,
  changePageBack,
  changePageForward,
} = filterSlice.actions;

export default filterSlice.reducer;
