import React from 'react';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import services from '../../services/user.service';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';
import { StyledSingUpPage } from './SingUpPage.styles';

const SingUpPage = () => {
  const navigate = useNavigate();

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

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '' }}
      validationSchema={singupSchema}
      onSubmit={(values) => {
        services.singUp(values)
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
        <StyledSingUpPage
          email={errors.email || ''}
          password={errors.password || ''}
          repeatPassword={errors.repeatPassword || ''}
        >
          <div>
            <h2>Sign Up</h2>

            <Form>
              <div className='styled__singup__page--input__container'>
                <img src={mail} alt='mail' />
                <Field type="text" name="email" className='styled__text__input'
                  id='email'
                  required />
                <label className='styled__label' htmlFor='email' id='email_label'>Email</label>
              </div>
              {<div className='styled__singup__page--error__info' id='email__error'>{errors.email || 'Enter your email'}</div>}

              <div className='styled__singup__page--input__container'>
                <img src={view} alt='view' />
                <Field type="text" name="password" className='styled__text__input'
                  id='password'
                  required />
                <label className='styled__label' htmlFor='password'>Password</label>
              </div>
              {<div className='styled__singup__page--error__info' id='password__error'>{errors.password || 'Enter your password'}</div>}

              <div className='styled__singup__page--input__container'>
                <img src={view} alt='view' />
                <Field type="text" name="repeatPassword" className='styled__text__input'
                  id='repeatPassword'
                  required />
                <label className='styled__label' htmlFor='repeatPassword'>Password replay</label>
              </div>
              {<div className='styled__singup__page--error__info' id='repeatPassword__error'>{errors.repeatPassword || 'Repeat your password without errors'}</div>}

              <button type="submit" className='styled__primary__button'>
                Sign Up
              </button>
            </Form>
          </div>
          <img src={man} alt='man'></img>
        </StyledSingUpPage>
      )
      }
    </Formik >

  );
};

export default SingUpPage;
