import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/cartApi';

const changeCount = createAsyncThunk(
  'user/changeCount',
  async (arc: { bookId: number; count: number }) => {
    const data = await api.changeCount(`${arc.bookId}`, arc.count);

    return data.data.cart;
  },
);

export default changeCount;
