import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import loginByPassEmail from './thunks/login';
import singUpByPassEmail from './thunks/singup';
import loginByToken from './thunks/loginByToken';
import type { IUserData } from '../../../types/user.datatype';

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
  reducers: {
    addUser: (state, action: PayloadAction<IUserData>) => {
      if (action.payload.user) state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByPassEmail.fulfilled, (state, action) => {
      if (action.payload) state.user = action.payload;
    });
    // builder.addCase(loginByPassEmail.rejected, (state, action) => {
    //   // if (action.error) state.error = action.error;
    // });
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
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
