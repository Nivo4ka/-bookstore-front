export type RatingType = {
  id: number;
  bookId: number;
  userId: number;
  grade: number;
};

export type BookType = {
  id: number;
  title: string;
  autor: string;
  price: number;
  genre: string;
  description?: string;
  cover?: string;
  ratings: RatingType[];
};

export type BookResponseType = {
  book: BookType;
};

export type BooksType = {
  books: BookType[];
  count: number;
  book?: BookType;
};
