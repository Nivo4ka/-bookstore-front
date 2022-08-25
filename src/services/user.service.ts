import http from '../http-common';
import { IUserData, IUserLogin, IUserSingUp, IUserPatch } from '../types/user.datatype';

const login = (info: IUserLogin) => {
  return http.post<IUserData>('/auth/login', info);
};

const singUp = (info: IUserSingUp) => {
  return http.post<IUserData>('/auth/singup', info);
};

const patchUser = (data: IUserPatch) => {
  return http.patch<IUserData>('/user/me', data);
};

export default { login, singUp, patchUser };
