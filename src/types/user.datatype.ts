export interface IUser {
  id: number;
  fullName: string;
  avatar: string;
  email: string;
}

export interface IUserLogin {
  email: string;
  password: string;
  repeatPassword?: string;
}

export interface IUserLoginByToken {
  token: string;
}

export interface IUserPatch {
  fullName?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  repeatNewPassword?: string;
}

export interface IUserPatchImg {
  file: ArrayBuffer | string;
}

export interface IUserData {
  token?: string;
  user?: IUser;
}
