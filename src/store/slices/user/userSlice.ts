// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import loginByPassEmail from './thunks/login';
import singUpByPassEmail from './thunks/singup';
import loginByToken from './thunks/loginByToken';
import patchUserInfo from './thunks/patchUserInfo';
import type { UserType } from '../../../types/userTypes';
import patchUserPassword from './thunks/patchUserPassword';
import patchUserImg from './thunks/patchUserImg';
import addToFavorite from './thunks/addToFavorite';
import deleteFavorite from './thunks/deleteFavorite';
import addRating from './thunks/addRating';
import addToCart from './thunks/addToCart';
import deleteFromCart from './thunks/deleteFromCart';
import changeCount from './thunks/changeCount';

const initialState: UserType = {
  id: 0,
  fullName: '',
  avatar: '',
  email: '',
  favorites: [],
  cart: [],
  ratings: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginByPassEmail.fulfilled, (state, action) => {
      if (action.payload) {
        state.id = action.payload.id;
        state.fullName = action.payload.fullName;
        state.avatar = action.payload.avatar;
        state.email = action.payload.email;
        state.favorites = action.payload.favorites;
        state.cart = action.payload.cart;
        state.ratings = action.payload.ratings;
      }
    });

    builder.addCase(singUpByPassEmail.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
        state.favorites = payload.favorites;
        state.cart = payload.cart;
        state.ratings = payload.ratings;
      }
    });

    builder.addCase(loginByToken.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
        state.favorites = payload.favorites;
        state.cart = payload.cart;
        state.ratings = payload.ratings;
      }
    });

    builder.addCase(patchUserInfo.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
        state.favorites = payload.favorites;
        state.cart = payload.cart;
        state.ratings = payload.ratings;
      }
    });

    builder.addCase(patchUserImg.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
        state.favorites = payload.favorites;
        state.cart = payload.cart;
        state.ratings = payload.ratings;
      }
    });

    builder.addCase(patchUserPassword.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
        state.favorites = payload.favorites;
        state.cart = payload.cart;
        state.ratings = payload.ratings;
      }
    });

    builder.addCase(addToFavorite.fulfilled, (state, { payload }) => {
      if (payload) {
        state.favorites = payload;
      }
    });

    builder.addCase(deleteFavorite.fulfilled, (state, { payload }) => {
      if (payload) {
        state.favorites = payload;
      }
    });

    builder.addCase(addRating.fulfilled, (state, action) => {
      if (action.payload) state.ratings = action.payload;
    });

    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cart = payload;
      }
    });

    builder.addCase(changeCount.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cart = payload;
      }
    });

    builder.addCase(deleteFromCart.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cart = payload;
      }
    });
  },
});

export default userSlice.reducer;
