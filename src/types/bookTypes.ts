export type BookType = {
  id: number;
  title: string;
  autor: string;
  price: number;
  genre: string;
  description?: string;
  cover?: string;
};

export type BooksType = {
  books: BookType[];
  count: number;
};
