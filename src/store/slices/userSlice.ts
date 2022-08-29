import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from '../../types/user.datatype';
import loginByPassEmail from '../../actions/login';
import singUpByPassEmail from '../../actions/singup';
import loginByToken from '../../actions/loginByToken';

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
    builder.addCase(loginByPassEmail.fulfilled, (state, { payload }) => {
      if (payload) state.user = payload;
    });
    // builder.addCase(loginByPassEmail.rejected, (state, { payload }) => {
    //   // eslint-disable-next-line no-console
    //   // console.log('rejected');
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
