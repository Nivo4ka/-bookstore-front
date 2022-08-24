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

export interface IUserData {
  token?: string,
  user?: IUser,
}