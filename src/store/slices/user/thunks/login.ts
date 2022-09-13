import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../../api/services/authApi';
import type { UserLoginType } from '../../../../types/userTypes';

const loginByPassEmail = createAsyncThunk(
  'user/login',
  async (values: UserLoginType) => {
    try {
      const data = await api.login(values);
      localStorage.setItem('token', data.data.token);
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default loginByPassEmail;
