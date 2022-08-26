import services from '../services/user.service';
import { IUserLogin } from '../types/user.datatype';
import { addUser } from '../store/slices/userSlice';
import { AppThunk } from '../store/store';

export const loginByPassEmail = (values: IUserLogin): AppThunk => (useAppDispatch: any) => {
  services.login(values)
    .then((response: any) => {
      useAppDispatch(addUser(response.data));
    })
    .catch((e: Error) => {
      // console.log(e);
    });
};
