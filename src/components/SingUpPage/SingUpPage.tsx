import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
// import hide from '../../images/icons/Hide.svg';
import { StyledSingUpPage } from './SingUpPage.styles';
import singUpByPassEmail from '../../actions/singup';
import { useAppDispatch } from '../../store/hooks';

const singupSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'Too Short!')
    .matches(/^[a-zA-Z0-9-_]{8,}$/)
    .required('Enter your password'),
  repeatPassword: yup.string()
    .when('password', {
      is: (val: string) => (!!(val && val.length > 0)),
      then: yup.string().oneOf(
        [yup.ref('password')],
        'Both password need to be the same',
      ),
    })
    .required('Repeat your password without errors'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

const SingUpPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '', repeatPassword: '' },
    validationSchema: singupSchema,
    onSubmit: (values) => {
      dispatch(singUpByPassEmail(values));
      navigate('/');
    },
  });

  return (

    <StyledSingUpPage
      email={formik.errors.email || ''}
      password={formik.errors.password || ''}
      repeatPassword={formik.errors.repeatPassword || ''}
    >
      <div>
        <h2>Sign Up</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="styled__singup__page--input__container">
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
          <div className="styled__singup__page--error__info" id="email__error">{formik.errors.email || 'Enter your email'}</div>

          <div className="styled__singup__page--input__container">
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
          <div className="styled__singup__page--error__info" id="password__error">{formik.errors.password || 'Enter your password'}</div>

          <div className="styled__singup__page--input__container">
            <img src={view} alt="view" />
            <input
              type="text"
              name="repeatPassword"
              className="styled__text__input"
              id="repeatPassword"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              required
            />
            <label className="styled__label" htmlFor="repeatPassword">Password replay</label>
          </div>
          <div className="styled__singup__page--error__info" id="repeatPassword__error">{formik.errors.repeatPassword || 'Repeat your password without errors'}</div>

          <button type="submit" className="styled__primary__button">
            Sign Up
          </button>
        </form>
      </div>
      <img src={man} alt="man" />
    </StyledSingUpPage>

  );
};

export default SingUpPage;
