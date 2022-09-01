import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/user.service';
import type { IUserLogin } from '../../../../types/user.datatype';

const singUpByPassEmail = createAsyncThunk(
  'user/singup',
  async (values: IUserLogin) => {
    try {
      const data = await services.singUp(values);
      localStorage.setItem('token', data.data.token || '');
      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default singUpByPassEmail;
