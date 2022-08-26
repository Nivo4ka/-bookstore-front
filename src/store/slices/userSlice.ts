import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import helpers from '../../utils/storeHelper';
import { IUserData } from '../../types/user.datatype';
import { RootState } from '../store';

const oldState = helpers.loadState();

export const userSlice = createSlice({
  name: 'user',
  initialState: oldState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserData>) => {
      if (action.payload.token) state.token = action.payload.token;// eslint-disable-line no-param-reassign, max-len
      if (action.payload.user)state.user = action.payload.user;// eslint-disable-line no-param-reassign, max-len
    },
  },
});

export const { addUser } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
