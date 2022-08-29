import instace from '../httpCommon';
import type { IUserData, IUserLogin, IUserSingUp, IUserPatch } from '../../types/user.datatype';

const login = (info: IUserLogin) => {
  return instace.post<IUserData>('/auth/login', info);
};

const singUp = (info: IUserSingUp) => {
  return instace.post<IUserData>('/auth/singup', info);
};

const patchUser = (data: IUserPatch) => {
  return instace.patch<IUserData>('/user/me', data);
};

const loginByToken = () => {
  return instace.get<IUserData>('/user/me');
};

export default { login, singUp, patchUser, loginByToken };
