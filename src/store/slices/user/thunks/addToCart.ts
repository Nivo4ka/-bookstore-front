import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/cartApi';

const addToCart = createAsyncThunk(
  'user/addToCart',
  async (bookId: number) => {
    const data = await api.addToCart(`${bookId}`);

    return data.data.cart;
  },
);

export default addToCart;
