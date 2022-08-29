import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { StyledLogInPage } from './LogInPage.styles';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
// import hide from '../../images/icons/Hide.svg';
import loginByPassEmail from '../../actions/login';
import { useAppDispatch } from '../../store/hooks';

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
    onSubmit: (values) => {
      dispatch(loginByPassEmail(values));
      navigate('/');
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
          <div className="styled__login__page--input__container">
            <img src={mail} alt="mail" />
            <input
              type="text"
              name="email"
              className="styled__text__input"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <label className="styled__label" htmlFor="email" id="email_label">Email</label>
          </div>
          <div className="styled__login__page--error__info" id="email__error">{formik.errors.email || 'Enter your email'}</div>
          <div className="styled__login__page--input__container">
            <img src={view} alt="view" />
            <input
              type="text"
              name="password"
              className="styled__text__input"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
            <label className="styled__label" htmlFor="password">Password</label>
          </div>
          <div className="styled__login__page--error__info" id="password__error">{formik.errors.password || 'Enter your password'}</div>
          <button type="submit" className="styled__primary__button">
            Log In
          </button>
        </form>
      </div>
      <img src={man} alt="man" />
    </StyledLogInPage>
  );
};

export default LogInPage;
