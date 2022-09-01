import instace from '../httpCommon';
import type { IUserData, IUserLogin, IUserPatch } from '../../types/user.datatype';

const login = (info: IUserLogin) => {
  return instace.post<IUserData>('/auth/login', info);
};

const singUp = (info: IUserLogin) => {
  return instace.post<IUserData>('/auth/singup', info);
};

const patchUserInfo = (data: IUserPatch) => {
  return instace.patch<IUserData>('/user/me', data);
};

const patchUserPassword = (data: IUserPatch) => {
  return instace.patch<IUserData>('/user/password', data);
};

const loginByToken = () => {
  return instace.get<IUserData>('/user/me');
};

export default { login, singUp, patchUserInfo, patchUserPassword, loginByToken };
