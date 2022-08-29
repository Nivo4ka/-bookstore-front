import { createAsyncThunk } from '@reduxjs/toolkit';
import services from '../api/services/user.service';
import type { IUserLogin } from '../types/user.datatype';

const loginByPassEmail = createAsyncThunk(
  'user/login',
  async (values: IUserLogin) => {
    const data = await services.login(values);
    localStorage.setItem('token', data.data.token || '');
    return data.data.user;
  },
);

export default loginByPassEmail;
