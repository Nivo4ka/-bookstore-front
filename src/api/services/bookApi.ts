import type { BookResponseType, BooksType } from '../../types/bookTypes';
import type { FilterRequestType } from '../../types/filterTypes';
import instance from '../httpCommon';

const BOOK_PATH = '/book';

const getAllBooks = (filter: FilterRequestType) => {
  return instance.get<BooksType>(`${BOOK_PATH}/getAll`, { params: filter });
};

const getBookById = (bookId: string) => {
  return instance.get<BookResponseType>(`${BOOK_PATH}/${bookId}`);
};

export default { getAllBooks, getBookById };
