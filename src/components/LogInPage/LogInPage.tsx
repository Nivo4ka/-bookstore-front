import React, { useState } from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import services from '../../services/user.service';
import { IUserData, IUserLogin } from '../../types/user.datatype';
import { StyledLogInPage } from './LogInPage.styles';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';

const LogInPage = () => {
  const navigate = useNavigate();

  const LoginSchema = yup.object().shape({
    password: yup.string()
      .min(8, 'Too Short!')
      .required('Enter your password'),
    email: yup.string().email('Invalid email').required('Enter your email'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        services.login(values)
          .then((response: any) => {
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/user-page');
          })
          .catch((e: Error) => {
            // console.log(e);
          });
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
