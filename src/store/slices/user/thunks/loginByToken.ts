import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/user.service';

const loginByToken = createAsyncThunk(
  'user/loginByToken',
  async () => {
    try {
      const data = await services.loginByToken();

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
