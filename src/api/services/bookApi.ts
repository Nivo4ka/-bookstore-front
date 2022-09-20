import type { BookResponseType, BooksResponseType, BooksType } from '../../types/bookTypes';
import type { FilterRequestType } from '../../types/filterTypes';
import instance from '../httpCommon';

const BOOK_PATH = '/book';

const getAllBooks = (filter: FilterRequestType) => {
  return instance.get<BooksType>(`${BOOK_PATH}/getAll`, { params: filter });
};

const getBookById = (bookId: string) => {
  return instance.get<BookResponseType>(`${BOOK_PATH}/${bookId}`);
};

const getBooksByArray = (bookIds: string) => {
  return instance.get<BooksResponseType>(`${BOOK_PATH}/getByArray`, { params: { bookIds } });
};

export default { getAllBooks, getBookById, getBooksByArray };
