import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import services from '../../../../api/services/user.service';
import type { IUserPatch } from '../../../../types/user.datatype';

const patchUserPassword = createAsyncThunk(
  'user/patchPassword',
  async (values: IUserPatch) => {
    try {
      const data = await services.patchUserPassword(values);

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
