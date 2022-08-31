// import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import loginByPassEmail from './thunks/login';
import singUpByPassEmail from './thunks/singup';
import loginByToken from './thunks/loginByToken';
import patchUserInfo from './thunks/patchUserInfo';
import type { IUserData } from '../../../types/user.datatype';
import patchUserPassword from './thunks/patchUserPassword';

const initialState: IUserData = {
  user: {
    id: 0,
    fullName: '',
    birthDay: '',
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginByPassEmail.fulfilled, (state, action) => {
      if (action.payload) state.user = action.payload;
      // eslint-disable-next-line no-console
      console.log(action);
    });
    builder.addCase(loginByPassEmail.rejected, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(action.error);
    });
    // builder.addCase(loginByPassEmail.pending, (state, { payload }) => {
    //   // eslint-disable-next-line no-console
    //   // console.log('pending');
    // });
    builder.addCase(singUpByPassEmail.fulfilled, (state, { payload }) => {
      if (payload) state.user = payload;
    });
    builder.addCase(loginByToken.fulfilled, (state, { payload }) => {
      if (payload) state.user = payload;
    });
    builder.addCase(patchUserInfo.fulfilled, (state, { payload }) => {
      if (payload) state.user = payload;
    });
    builder.addCase(patchUserPassword.fulfilled, (state, { payload }) => {
      if (payload) state.user = payload;
    });
  },
});

export default userSlice.reducer;
