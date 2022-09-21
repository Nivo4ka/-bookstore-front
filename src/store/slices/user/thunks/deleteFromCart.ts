import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/cartApi';

const deleteFromCart = createAsyncThunk(
  'user/deleteFromCart',
  async (bookId: number) => {
    const data = await api.deleteFromCart(`${bookId}`);

    return data.data.cart;
  },
);

export default deleteFromCart;
