import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/user.service';
import type { IUserLogin } from '../../../../types/user.datatype';

const loginByPassEmail = createAsyncThunk(
  'user/login',
  async (values: IUserLogin) => {
    try {
      const data = await services.login(values);

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
