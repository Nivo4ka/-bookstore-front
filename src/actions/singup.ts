import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import services from '../services/user.service';
import { IUserSingUp } from '../types/user.datatype';
import { addUser } from '../store/slices/userSlice';
import { AppThunk } from '../store/store';

export const singUpByPassEmail = (values: IUserSingUp): AppThunk => (useAppDispatch: any) => {
  services.singUp(values)
    .then((response: any) => {
      useAppDispatch(addUser(response.data));
    })
    .catch((e: Error) => {
      // console.log(e);
    });
};
