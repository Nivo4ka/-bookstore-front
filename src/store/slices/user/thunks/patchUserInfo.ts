import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../../api/services/userApi';
import type { UserPatchType } from '../../../../types/userTypes';

const patchUserInfo = createAsyncThunk(
  'user/patchInfo',
  async (values: UserPatchType) => {
    try {
      const data = await api.patchUserInfo(values);

      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default patchUserInfo;
