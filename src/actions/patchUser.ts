import services from '../api/services/user.service';
import type { IUserLogin } from '../types/user.datatype';
import { addUser } from '../store/slices/userSlice';

export const loginByPassEmail = (values: IUserLogin) => (useAppDispatch: any) => {
  services.patchUser(values)
    .then((response: any) => {
      useAppDispatch(addUser(response.data));
    })
    .catch((e: Error) => {
      // console.log(e);
    });
};
