import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/book/bookSlice';
import filterSlice from './slices/filter/filterSlice';
import userSlice from './slices/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
    books: bookSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

export default store;
