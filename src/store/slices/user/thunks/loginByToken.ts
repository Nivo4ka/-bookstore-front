import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../../api/services/userApi';

const loginByToken = createAsyncThunk(
  'user/loginByToken',
  async () => {
    try {
      const data = await api.loginByToken();

      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default loginByToken;
