export interface IBook {
  id: number;
  title: string;
  autor: string;
  price: number;
  genre: string;
  description?: string;
  cover?: string;
}

export interface IBooks {
  books: IBook[];
  count: number;
}
