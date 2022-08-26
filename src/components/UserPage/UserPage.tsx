import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import schemes from '../../types/userSchemes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import mail from '../../images/icons/Mail.svg';
import profile from '../../images/icons/User_profile.svg';
import camera from '../../images/icons/Camera.svg';
import { StyledUserPage } from './UserPage.styles';
import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';

const UserPage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.user);

  return (
    <StyledUserPage>
      <div className='styled__user__page--user__photo'>
        {/* <img></img> */}
        <div className='styled__user__page--change__img'>
          <img src={camera} alt='camera'></img>
        </div>
      </div>
      <div>

        <Formik
          initialValues={{ fullName: userInfo?.fullName || '', email: userInfo?.email || '', password: 'secret' }}
          validationSchema={schemes.PatchUserSchema}
          onSubmit={(values) => {
            //
          }}
        >
          {({ errors }) => (
            <Form>
              <div>
                <div className='styled__user__page--place__with__changes'>
                  <p>Personal information</p>
                  <p className='styled__user__page--switch__to__change'>Change information</p>
                </div>
                <div className='styled__user__page--personal__information'>
                  <div className='styled__user__page--input__container'>
                    <img src={profile} alt='profile' />
                    <Field type="text" name="fullName" className='styled__text__input'
                      id='fullName' disabled
                      required />
                    <label className='styled__label' htmlFor='fullName'>Name</label>
                  </div>
                  <div className='styled__user__page--input__container'>
                    <img src={mail} alt='mail' />
                    <Field type="text" name="email" className='styled__text__input'
                      id='email' disabled
                      required />
                    <label className='styled__label' htmlFor='email' id='email_label'>Email</label>
                  </div>
                </div>
                <div>
                  <div className='styled__user__page--place__with__changes'>
                    <p>Password</p>
                    <p className='styled__user__page--switch__to__change'>Change password</p>
                  </div>
                  <div className='styled__user__page--personal__information'>
                    <div className='styled__user__page--input__container'>
                      <img src={hide} alt='hide' />
                      <Field type="password" name="password" className='styled__text__input'
                        id='password' disabled
                        required />
                      <label className='styled__label' htmlFor='password' id='password_label'>Password</label>
                    </div>
                  </div>
                </div>
                {/* <button type="submit" className='styled__primary__button'>
                  Confirm
                </button> */}
              </div>
            </Form>
          )
          }
        </Formik >
      </div>

    </StyledUserPage>
  );
};

export default UserPage;
