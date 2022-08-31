import React from 'react';
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { AxiosError } from 'axios';
import { StyledLogInPage } from './LogInPage.styles';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
// import hide from '../../images/icons/Hide.svg';
import loginByPassEmail from '../../store/slices/user/thunks/login';
import { useAppDispatch } from '../../store/hooks';
import Input from '../Input/Input';
import Button from '../Button/Button';

const loginSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'Too Short!')
    .required('Enter your password'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

interface IState {
  from?: { pathname: string };
}

const LogInPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(loginByPassEmail(values)).unwrap();
        // eslint-disable-next-line no-console
        const { from } = location.state as IState;
        if (from) {
          navigate(from.pathname);
        } else {
          navigate('/');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        // eslint-disable-next-line no-console
        // console.log(err);
        // eslint-disable-next-line no-alert
        // alert(err.message);
        // handle error here
      }
    },
  });

  return (
    <StyledLogInPage>
      <div>
        <h2>Log In</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            placeHolder="Email"
            nameInput="email"
            icon={mail}
            type="text"
            error={formik.errors.email}
          />
          <Input
            onChange={formik.handleChange}
            className="styled__user__page-styled__text__input"
            value={formik.values.password}
            placeHolder="Password"
            nameInput="password"
            icon={view}
            type="text"
            error={formik.errors.password}
          />
          <Button type="submit">Log In</Button>
        </form>
      </div>
      <img src={man} alt="man" />
    </StyledLogInPage>
  );
};

export default LogInPage;
