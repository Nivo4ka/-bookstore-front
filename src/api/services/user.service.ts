import instance from '../httpCommon';
import type { IUserData, IUserLogin, IUserPatch, IUserPatchImg } from '../../types/user.datatype';

const login = (info: IUserLogin) => {
  return instance.post<IUserData>('/auth/login', info);
};

const singUp = (info: IUserLogin) => {
  return instance.post<IUserData>('/auth/singup', info);
};

const patchUserInfo = (data: IUserPatch) => {
  return instance.patch<IUserData>('/user/me', data);
};

const patchUserImg = (data: IUserPatchImg) => {
  return instance.patch<IUserData>('/user/img', data);
};

const patchUserPassword = (data: IUserPatch) => {
  return instance.patch<IUserData>('/user/password', data);
};

const loginByToken = () => {
  return instance.get<IUserData>('/user/me');
};

export default { login, singUp, patchUserInfo, patchUserImg, patchUserPassword, loginByToken };
