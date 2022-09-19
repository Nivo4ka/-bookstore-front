export type BookType = {
  id: number;
  title: string;
  autor: string;
  price: number;
  genre: string;
  description?: string;
  cover?: string;
  rating: number;
};

export type BookResponseType = {
  book: BookType;
};

export type BooksType = {
  books: BookType[];
  count: number;
  book?: BookType;
};
