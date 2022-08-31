import { createAsyncThunk } from '@reduxjs/toolkit';
import services from '../../../../api/services/user.service';

const loginByToken = createAsyncThunk(
  'user/loginByToken',
  async () => {
    const data = await services.loginByToken();
    // localStorage.setItem('token', data.data.token || '');
    return data.data.user;
  },
);

export default loginByToken;
