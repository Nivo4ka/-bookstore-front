import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
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

const LogInPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(loginByPassEmail(values)).unwrap();
        navigate('/');
        // handle result here
      } catch (rejectedValueOrSerializedError) {
        // handle error here
      }
    },
  });

  return (
    <StyledLogInPage
      error1={formik.errors.email || ''}
      error2={formik.errors.password || ''}
    >
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
          />
          <div className="styled__login__page--error__info" id="email__error">{formik.errors.email || 'Enter your email'}</div>
          <Input
            onChange={formik.handleChange}
            className="styled__user__page-styled__text__input"
            value={formik.values.password}
            placeHolder="Password"
            nameInput="password"
            icon={view}
            type="text"
          />
          <div className="styled__login__page--error__info" id="password__error">{formik.errors.password || 'Enter your password'}</div>
          <Button type="submit">Log In</Button>
        </form>
      </div>
      <img src={man} alt="man" />
    </StyledLogInPage>
  );
};

export default LogInPage;
