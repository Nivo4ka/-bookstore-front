import type { RatingResponseType } from '../../types/userTypes';
import instance from '../httpCommon';

const FAVORITE_PATH = '/rating';

const addRating = (bookId: string, grade: number) => {
  return instance.post<RatingResponseType>(`${FAVORITE_PATH}/${bookId}`, { grade });
};

export default { addRating };
