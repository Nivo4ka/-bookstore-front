import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import helpers from '../utils/storeHelper';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

store.subscribe(() => {
  return helpers.saveState(store.getState().user);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
