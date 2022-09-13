import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../../api/services/userApi';
import type { UserPatchType } from '../../../../types/userTypes';

const patchUserPassword = createAsyncThunk(
  'user/patchPassword',
  async (values: UserPatchType) => {
    try {
      const data = await api.patchUserPassword(values);

      return data.data.user;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      }

      throw err;
    }
  },
);

export default patchUserPassword;
