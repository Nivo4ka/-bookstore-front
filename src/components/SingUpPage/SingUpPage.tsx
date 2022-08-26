import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import schemes from '../../types/userSchemes';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';
import { StyledSingUpPage } from './SingUpPage.styles';
import { singUpByPassEmail } from '../../actions/singup';
import { useAppDispatch } from '../../store/hooks';

const SingUpPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '' }}
      validationSchema={schemes.SingupSchema}
      onSubmit={(values) => {
        dispatch(singUpByPassEmail(values));
        navigate('/');
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
