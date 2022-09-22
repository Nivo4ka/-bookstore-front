import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../types/userTypes';
import thunks from './thunks/index';

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
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(thunks.loginByPassEmail.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      return payload;
    });

    builder.addCase(thunks.singUpByPassEmail.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      return payload;
    });

    builder.addCase(thunks.loginByToken.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      return payload;
    });

    builder.addCase(thunks.patchUserInfo.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      return payload;
    });

    builder.addCase(thunks.patchUserImg.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      return payload;
    });

    builder.addCase(thunks.patchUserPassword.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      return payload;
    });

    builder.addCase(thunks.addToFavorite.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.favorites = payload;
    });

    builder.addCase(thunks.deleteFavorite.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.favorites = payload;
    });

    builder.addCase(thunks.addRating.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.ratings = payload;
    });

    builder.addCase(thunks.addToCart.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.cart = payload;
    });

    builder.addCase(thunks.changeCount.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.cart = payload;
    });

    builder.addCase(thunks.deleteFromCart.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      state.cart = payload;
    });
  },
});

export default userSlice.reducer;
