import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filter/filterSlice';
import userSlice from './slices/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export default store;
