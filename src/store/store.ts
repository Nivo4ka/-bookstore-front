import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export default store;
