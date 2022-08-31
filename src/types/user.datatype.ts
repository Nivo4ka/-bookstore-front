export interface IUser {
  id: number;
  fullName: string;
  birthDay: string;
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

export interface IUserData {
  token?: string;
  user?: IUser;
}
