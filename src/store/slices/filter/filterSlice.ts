// import type { PayloadAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IFilter, IPrice } from '../../../types/filterTypes';

const initialState: IFilter = {
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
    }],
  price: {
    min: 1,
    max: 1000,
  },
  sortBy: {
    arrSort: ['Price', 'Name', 'Author name', 'Rating', 'Date of issue'],
    direction: 'desc',
    selectedSort: 'Price',
  },
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
      if (state.sortBy.selectedSort === state.sortBy.arrSort[action.payload]) {
        state.sortBy.direction = state.sortBy.direction === 'desc' ? 'asc' : 'desc';
      } else {
        state.sortBy.selectedSort = state.sortBy.arrSort[action.payload];
        state.sortBy.direction = 'desc';
      }
    },
    changePrice: (state, action: PayloadAction<IPrice>) => {
      state.price.min = action.payload.min;
      state.price.max = action.payload.max;
    },

  },
});

export const {
  changeGenres,
  changeSortBy,
  changePrice,
} = filterSlice.actions;

export default filterSlice.reducer;
