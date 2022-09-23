import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ReactComponent as Camera } from '../../images/icons/Camera.svg';
import StyledUserPage from './UserPage.styles';
import Button from '../../components/Button';
import InfoSection from '../../components/InfoSection/InfoSection';
import PasswordSection from '../../components/InfoSection/PasswordSection';
import userThunks from '../../store/slices/user/thunks/index';
import ImgButton from '../../components/ImgButton';

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
  const userInfo = useAppSelector((state) => state.user);
  const [isChangeInfoOrPassword, setIsChangeInfoOrPassword] = useState('none');

  const formikInfo = useFormik({
    initialValues: { fullName: userInfo?.fullName || '', email: userInfo?.email || '' },
    validationSchema: patchUserSchema,
    onSubmit: async (values, { setErrors }) => {
      try {
        await dispatch(userThunks.patchUserInfo(values)).unwrap();
        setIsChangeInfoOrPassword('none');
      } catch (err) {
        if (err.message) {
          if (err.message.includes('email')) {
            setErrors({ email: err.message });
          }
        }
      }
    },
  });

  const formikPassword = useFormik({
    initialValues: { password: '', newPassword: '', repeatNewPassword: '' },
    validationSchema: patchPasswordSchema,
    onSubmit: async (values, { setErrors }) => {
      try {
        await dispatch(userThunks.patchUserPassword(values)).unwrap();
        setIsChangeInfoOrPassword('none');
      } catch (err) {
        if (err.message) {
          if (err.message.includes('password')) {
            setErrors({ password: err.message });
          }
        }
      }
    },
  });
  const onChangeInfoOrPassword = (nameChange: string) => {
    if (isChangeInfoOrPassword === nameChange) {
      setIsChangeInfoOrPassword('none');
    } else {
      setIsChangeInfoOrPassword(nameChange);
    }
    formikInfo.resetForm();
    formikPassword.resetForm();
  };

  const onSubmitInfoOrPassword = (e: React.FormEvent<HTMLFormElement>) => {
    if (isChangeInfoOrPassword === 'info') {
      formikInfo.handleSubmit(e);
    } if (isChangeInfoOrPassword === 'password') {
      formikPassword.handleSubmit(e);
    }
  };

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        dispatch(userThunks.patchUserImg({ file: reader.result! }));
      };
    }
  };

  return (
    <StyledUserPage>
      <div>
        <div className="styled-user-page__user-photo">
          {userInfo && userInfo.avatar &&
            (<img
              className="styled-user-page__avatar"
              src={userInfo?.avatar}
              alt={userInfo.avatar}
            />)}
          <label htmlFor="file">
            <ImgButton
              // src={camera}
              // isNotSelected
              className="styled-user-page__change-img"
            >
              <Camera />
            </ImgButton>
            <input className="styled-user-page__input-file" type="file" id="file" name="file" onChange={onChangeImg} />
          </label>
        </div>
      </div>
      <div className="styled-user-page__form-container">
        <form onSubmit={onSubmitInfoOrPassword}>
          <div>
            <div className="styled-user-page__place-with-changes">
              <p>Personal information</p>
              <p
                className="styled-user-page__switch-to-change"
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
            <div className="styled-user-page__place-with-changes">
              <p>Password</p>
              <p
                className="styled-user-page__switch-to-change"
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
