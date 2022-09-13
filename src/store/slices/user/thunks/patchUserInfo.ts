import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../api/services/userApi';
import type { UserPatchType } from '../../../../types/userTypes';

const patchUserInfo = createAsyncThunk(
  'user/patchInfo',
  async (values: UserPatchType) => {
    const data = await api.patchUserInfo(values);

    return data.data.user;
  },
);

export default patchUserInfo;
