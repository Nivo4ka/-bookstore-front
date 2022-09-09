import type { IBooks } from '../../types/bookTypes';
import type { IFilterRequest } from '../../types/filterTypes';
import instance from '../httpCommon';

const getAllBooks = (filter: IFilterRequest) => {
  // return instance.request<IBooks>({ method: 'post', url: '/book/getAll', params: filter });
  return instance.get<IBooks>('/book/getAll', { params: filter });
};

export default { getAllBooks };
