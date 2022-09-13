export type UserType = {
  id: number;
  fullName: string;
  avatar: string;
  email: string;
};

export type UserLoginType = {
  email: string;
  password: string;
  repeatPassword?: string;
};

export type UserLoginByTokenType = {
  token: string;
};

export type UserPatchType = {
  fullName?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  repeatNewPassword?: string;
};

export type UserPatchImgType = {
  file: ArrayBuffer | string;
};

export type UserDataType = {
  token: string;
  user: UserType;
};
