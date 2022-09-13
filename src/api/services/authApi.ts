import instance from '../httpCommon';
import type { UserDataType, UserLoginType } from '../../types/userTypes';

const AUTH_PATH = '/auth';

const login = (info: UserLoginType) => {
  return instance.post<UserDataType>(`${AUTH_PATH}/login`, info);
};

const singUp = (info: UserLoginType) => {
  return instance.post<UserDataType>(`${AUTH_PATH}/singup`, info);
};

export default {
  login,
  singUp,
};
