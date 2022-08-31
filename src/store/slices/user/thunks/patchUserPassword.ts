import { createAsyncThunk } from '@reduxjs/toolkit';
import services from '../../../../api/services/user.service';
import type { IUserPatch } from '../../../../types/user.datatype';

const patchUserPassword = createAsyncThunk(
  'user/patchPassword',
  async (values: IUserPatch) => {
    const data = await services.patchUserPassword(values);
    // if (data.data.token) {
    //   localStorage.setItem('token', data.data.token || '');
    // }

    return data.data.user;
  },
);

export default patchUserPassword;
