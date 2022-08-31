import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import camera from '../../images/icons/Camera.svg';
import { StyledUserPage } from './UserPage.styles';
import Button from '../Button/Button';
import InfoSection from './InfoSection';
import PasswordSection from './PasswordSection';
import patchUserPassword from '../../store/slices/user/thunks/patchUserPassword';
import patchUserInfo from '../../store/slices/user/thunks/patchUserInfo';

const patchUserSchema = yup.object().shape({
  fullName: yup.string().required('Enter your name'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

const patchPasswordSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'Too Short!')
    .matches(/^[a-zA-Z0-9-_]{8,}$/, 'The password must consist of numbers and latin characters')
    .required('Enter your password'),
  newPassword: yup.string()
    .min(8, 'Too Short!')
    .matches(/^[a-zA-Z0-9-_]{8,}$/, 'The password must consist of numbers and latin characters')
    .when('password', {
      is: (val: string) => (!!(val && val.length > 0)),
      then: yup.string().notOneOf(
        [yup.ref('password')],
        'Both passwords need to be different',
      ),
    })
    .required('Enter your password'),
  repeatNewPassword: yup.string()
    .when('newPassword', {
      is: (val: string) => (!!(val && val.length > 0)),
      then: yup.string().oneOf(
        [yup.ref('newPassword')],
        'Both password need to be the same',
      ),
    })
    .required('Repeat your new password without errors'),
});

const UserPage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.user);
  const [isChangeInfoOrPassword, setIsChangeInfoOrPassword] = useState('none');

  const formikInfo = useFormik({
    initialValues: { fullName: userInfo?.fullName || '', email: userInfo?.email || '' },
    validationSchema: patchUserSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(patchUserInfo(values)).unwrap();
      } catch (err) {
        // handle error here
      }
    },
  });

  const formikPassword = useFormik({
    initialValues: { password: '', newPassword: '', repeatNewPassword: '' },
    validationSchema: patchPasswordSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(patchUserPassword(values)).unwrap();
      } catch (err) {
        // handle error here
      }
    },
  });
  const onChangeInfoOrPassword = (nameChange: string) => {
    if (isChangeInfoOrPassword === nameChange) {
      setIsChangeInfoOrPassword('none');
    } else {
      setIsChangeInfoOrPassword(nameChange);
    }
  };

  const onSubmitInfoOrPassword = (e: React.FormEvent<HTMLFormElement>) => {
    if (isChangeInfoOrPassword === 'info') {
      formikInfo.handleSubmit(e);
    } if (isChangeInfoOrPassword === 'password') {
      formikPassword.handleSubmit(e);
    }
    setIsChangeInfoOrPassword('none');
  };

  return (
    <StyledUserPage>
      <div className="styled__user__page--user__photo">
        {/* <img></img> */}
        <div className="styled__user__page--change__img">
          <img src={camera} alt="camera" />
        </div>
      </div>
      <div className="styled__user__page--form__container">
        <form onSubmit={onSubmitInfoOrPassword}>
          <div>
            <div className="styled__user__page--place__with__changes">
              <p>Personal information</p>
              <p
                className="styled__user__page--switch__to__change"
                onClick={() => onChangeInfoOrPassword('info')}
              >Change information
              </p>
            </div>
            <InfoSection
              isChangeInfoOrPassword={isChangeInfoOrPassword}
              onChange={formikInfo.handleChange}
              fullName={formikInfo.values.fullName}
              email={formikInfo.values.email}
              errors={formikInfo.errors}
            />
            <div className="styled__user__page--place__with__changes">
              <p>Password</p>
              <p
                className="styled__user__page--switch__to__change"
                onClick={() => onChangeInfoOrPassword('password')}
              >Change password
              </p>
            </div>
            <PasswordSection
              isChangeInfoOrPassword={isChangeInfoOrPassword}
              onChange={formikPassword.handleChange}
              password={formikPassword.values.password}
              newPassword={formikPassword.values.newPassword}
              repeatNewPassword={formikPassword.values.repeatNewPassword}
              errors={formikPassword.errors}
            />
            {isChangeInfoOrPassword !== 'none' &&
              <Button type="submit">Confirm</Button>
            }
          </div>
        </form>
      </div >

    </StyledUserPage >
  );
};

export default UserPage;
