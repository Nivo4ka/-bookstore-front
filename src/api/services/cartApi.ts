import type { CartResponseType } from '../../types/userTypes';
import instance from '../httpCommon';

const CART_PATH = '/cart';

const addToCart = (bookId: string) => {
  return instance.post<CartResponseType>(`${CART_PATH}/${bookId}`);
};

const changeCount = (bookId: string, count: number) => {
  return instance.patch<CartResponseType>(`${CART_PATH}/${bookId}`, { count });
};

const deleteFromCart = (bookId: string) => {
  return instance.delete<CartResponseType>(`${CART_PATH}/${bookId}`);
};

export default { addToCart, changeCount, deleteFromCart };
