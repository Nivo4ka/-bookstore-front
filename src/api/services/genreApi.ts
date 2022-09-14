import type { GenreType } from '../../types/filterTypes';
import instance from '../httpCommon';

const GENRE_PATH = '/genre';

const getGenres = () => {
  return instance.get<GenreType[]>(`${GENRE_PATH}/getAll`);
};

export default { getGenres };
