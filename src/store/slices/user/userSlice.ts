// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import loginByPassEmail from './thunks/login';
import singUpByPassEmail from './thunks/singup';
import loginByToken from './thunks/loginByToken';
import patchUserInfo from './thunks/patchUserInfo';
import type { UserType } from '../../../types/userTypes';
import patchUserPassword from './thunks/patchUserPassword';
import patchUserImg from './thunks/patchUserImg';

const initialState: UserType = {
  id: 0,
  fullName: '',
  avatar: '',
  email: '',
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
      }
    });

    builder.addCase(singUpByPassEmail.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
      }
    });

    builder.addCase(loginByToken.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
      }
    });

    builder.addCase(patchUserInfo.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
      }
    });

    builder.addCase(patchUserImg.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
      }
    });

    builder.addCase(patchUserPassword.fulfilled, (state, { payload }) => {
      if (payload) {
        state.id = payload.id;
        state.fullName = payload.fullName;
        state.avatar = payload.avatar;
        state.email = payload.email;
      }
    });
  },
});

export default userSlice.reducer;
