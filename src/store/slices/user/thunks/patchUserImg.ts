import { createAsyncThunk } from '@reduxjs/toolkit';
import services from '../../../../api/services/user.service';
import type { IUserPatchImg } from '../../../../types/user.datatype';

const patchUserImg = createAsyncThunk(
  'user/patchImg',
  async (values: IUserPatchImg) => {
    const data = await services.patchUserImg(values);
    // if (data.data.token) {
    //   localStorage.setItem('token', data.data.token || '');
    // }

    return data.data.user;
  },
);

export default patchUserImg;
