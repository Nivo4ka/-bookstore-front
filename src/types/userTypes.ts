export type UserType = {
  id: number;
  fullName: string;
  avatar: string;
  email: string;
  favorites: FavoriteType[];
  cart: CartType[];
  ratings: RatingType[];
};

export type RatingType = {
  id: number;
  bookId: number;
  userId: number;
  grade: number;
};

export type RatingResponseType = {
  ratings: RatingType[];
};

export type FavoriteResponseType = {
  favorites: FavoriteType[];
};

export type FavoriteType = {
  id: number;
  bookId: number;
  userId: number;
};

export type CartType = {
  id: number;
  bookId: number;
  userId: number;
  count: number;
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
