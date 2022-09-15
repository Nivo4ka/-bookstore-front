import instance from '../httpCommon';
import type { UserDataType, UserPatchImgType, UserPatchType } from '../../types/userTypes';

const USER_PATH = '/user';

const patchUserInfo = (data: UserPatchType) => {
  return instance.patch<UserDataType>(`${USER_PATH}/me`, data);
};

const patchUserImg = (data: UserPatchImgType) => {
  return instance.patch<UserDataType>(`${USER_PATH}/img`, data);
};

const patchUserPassword = (data: UserPatchType) => {
  return instance.patch<UserDataType>(`${USER_PATH}/password`, data);
};

const loginByToken = () => {
  return instance.get<UserDataType>(`${USER_PATH}/me`);
};

export default {
  patchUserInfo,
  patchUserImg,
  patchUserPassword,
  loginByToken,
};
