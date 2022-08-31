import { createAsyncThunk } from '@reduxjs/toolkit';
import services from '../../../../api/services/user.service';
import type { IUserLogin } from '../../../../types/user.datatype';

const singUpByPassEmail = createAsyncThunk(
  'user/singup',
  async (values: IUserLogin) => {
    const data = await services.singUp(values);
    localStorage.setItem('token', data.data.token || '');
    return data.data.user;
  },
);

export default singUpByPassEmail;
