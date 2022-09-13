import type { BooksType } from '../../types/bookTypes';
import type { FilterRequestType } from '../../types/filterTypes';
import instance from '../httpCommon';

const BOOK_PATH = '/book';

const getAllBooks = (filter: FilterRequestType) => {
  return instance.get<BooksType>(`${BOOK_PATH}/getAll`, { params: filter });
};

export default { getAllBooks };
