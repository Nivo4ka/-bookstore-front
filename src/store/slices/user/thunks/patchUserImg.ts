import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/userApi';
import type { UserPatchImgType } from '../../../../types/userTypes';

const patchUserImg = createAsyncThunk(
  'user/patchImg',
  async (values: UserPatchImgType) => {
    const data = await api.patchUserImg(values);

    return data.data.user;
  },
);

export default patchUserImg;
