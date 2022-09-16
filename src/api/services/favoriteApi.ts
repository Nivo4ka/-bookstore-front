import type { FavoriteResponseType } from '../../types/userTypes';
import instance from '../httpCommon';

const FAVORITE_PATH = '/favorite';

const addToFavorite = (bookId: string) => {
  return instance.post<FavoriteResponseType>(`${FAVORITE_PATH}/${bookId}`);
};

const deleteFavorite = (bookId: string) => {
  return instance.delete<FavoriteResponseType>(`${FAVORITE_PATH}/${bookId}`);
};

export default { addToFavorite, deleteFavorite };
