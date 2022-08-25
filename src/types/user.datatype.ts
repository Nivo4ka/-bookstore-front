export interface IUser {
  id: number,
  fullName: string,
  birthDay: string,
  email: string,
}

export interface IUserLogin {
  email: string,
  password: string,
}

export interface IUserSingUp {
  email: string,
  password: string,
  repeatPassword:string,
}

export interface IUserPatch {
  fullName?: string,
  birthDay?: string,
}

export interface IUserData {
  token?: string,
  user?: IUser,
}
