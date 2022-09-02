import instace from '../httpCommon';
import type { IUserData, IUserLogin, IUserPatch, IUserPatchImg } from '../../types/user.datatype';

const login = (info: IUserLogin) => {
  return instace.post<IUserData>('/auth/login', info);
};

const singUp = (info: IUserLogin) => {
  return instace.post<IUserData>('/auth/singup', info);
};

const patchUserInfo = (data: IUserPatch) => {
  return instace.patch<IUserData>('/user/me', data);
};

const patchUserImg = (data: IUserPatchImg) => {
  return instace.patch<IUserData>('/user/img', data);
};

const patchUserPassword = (data: IUserPatch) => {
  return instace.patch<IUserData>('/user/password', data);
};

const loginByToken = () => {
  return instace.get<IUserData>('/user/me');
};

export default { login, singUp, patchUserInfo, patchUserImg, patchUserPassword, loginByToken };
