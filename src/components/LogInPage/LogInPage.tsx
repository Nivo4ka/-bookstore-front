import React from 'react';
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import StyledLogInPage from './LogInPage.styles';
import man from '../../images/man.svg';
import { ReactComponent as Mail } from '../../images/icons/Mail.svg';
import { ReactComponent as View } from '../../images/icons/View.svg';
import { ReactComponent as Hide } from '../../images/icons/Hide.svg';
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
    onSubmit: async (values, { setErrors }) => {
      try {
        await dispatch(loginByPassEmail(values)).unwrap();
        let path = '/';
        if (location.state) {
          const { from } = location.state as IState;
          path = from?.pathname ?? '/';
        }
        navigate(path);
      } catch (err) {
        if (err.message) {
          if (err.message.includes('password')) {
            setErrors({ password: err.message });
          }
          if (err.message.includes('User')) {
            setErrors({ email: err.message });
          }
        }
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
            Icon1={Mail}
            type1="text"
            error={formik.errors.email}
          />
          <Input
            onChange={formik.handleChange}
            value={formik.values.password}
            placeHolder="Password"
            nameInput="password"
            Icon1={Hide}
            Icon2={View}
            type1="password"
            type2="text"
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
