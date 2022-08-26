import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import schemes from '../../types/userSchemes';
import { StyledLogInPage } from './LogInPage.styles';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';
import { loginByPassEmail } from '../../actions/login';
import { useAppDispatch } from '../../store/hooks';

const LogInPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schemes.LoginSchema}
      onSubmit={(values) => {
        dispatch(loginByPassEmail(values));
        navigate('/');
      }}
    >
      {({ errors }) => (
        <StyledLogInPage
          error1={errors.email || ''}
          error2={errors.password || ''}
        >
          <div>
            <h2>Log In</h2>

            <Form>
              <div className='styled__login__page--input__container'>
                <img src={mail} alt='mail' />
                <Field type="text" name="email" className='styled__text__input'
                  id='email'
                  required />
                <label className='styled__label' htmlFor='email' id='email_label'>Email</label>
              </div>
              {<div className='styled__login__page--error__info' id='email__error'>{errors.email || 'Enter your email'}</div>}
              <div className='styled__login__page--input__container'>
                <img src={view} alt='view' />
                <Field type="text" name="password" className='styled__text__input'
                  id='password'
                  required />
                <label className='styled__label' htmlFor='password'>Password</label>
              </div>
              {<div className='styled__login__page--error__info' id='password__error'>{errors.password || 'Enter your password'}</div>}
              <button type="submit" className='styled__primary__button'>
                Log In
              </button>
            </Form>
          </div>
          <img src={man} alt='man'></img>
        </StyledLogInPage>
      )
      }
    </Formik >
  );
};

export default LogInPage;
