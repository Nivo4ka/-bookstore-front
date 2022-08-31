import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/user.service';
import type { IUserLogin } from '../../../../types/user.datatype';

const loginByPassEmail = createAsyncThunk(
  'user/login',
  async (values: IUserLogin) => {
    try {
      const data = await services.login(values);
      // if (data.data.token) {
      //   localStorage.setItem('token', data.data.token || '');
      // }

      return data.data.user;
    } catch (err) {
      // eslint-disable-next-line no-console
      // console.log(err.response);
      // return err

      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default loginByPassEmail;
