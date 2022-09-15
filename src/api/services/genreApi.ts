import type { GenresResponseType } from '../../types/filterTypes';
import instance from '../httpCommon';

const GENRE_PATH = '/genre';

const getGenres = () => {
  return instance.get<GenresResponseType>(`${GENRE_PATH}/getAll`);
};

export default { getGenres };
