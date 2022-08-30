import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppSelector } from '../../store/hooks';
import mail from '../../images/icons/Mail.svg';
import profile from '../../images/icons/User_profile.svg';
import camera from '../../images/icons/Camera.svg';
import { StyledUserPage } from './UserPage.styles';
// import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';
import Button from '../Button/Button';
import Input from '../Input/Input';

const patchUserSchema = yup.object().shape({
  fullName: yup.string().required('Enter your name'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

const patchPasswordSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'Too Short!')
    .matches(/^[a-zA-Z0-9-_]{8,}$/)
    .required('Enter your password'),
  newPassword: yup.string()
    .min(8, 'Too Short!')
    .matches(/^[a-zA-Z0-9-_]{8,}$/)
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
  const userInfo = useAppSelector((state) => state.user.user);
  const [isChangeInfoOrPassword, setIsChangeInfoOrPassword] = useState('none');

  const formikInfo = useFormik({
    initialValues: { fullName: userInfo?.fullName || '', email: userInfo?.email || '' },
    validationSchema: patchUserSchema,
    onSubmit: (values) => {
      // dispatch(singUpByPassEmail(values));
      // navigate('/');
    },
  });

  const formikPassword = useFormik({
    initialValues: { password: 'password', newPassword: '', repeatNewPassword: '' },
    validationSchema: patchPasswordSchema,
    onSubmit: (values) => {
      // dispatch(singUpByPassEmail(values));
      // navigate('/');
    },
  });

  const onChangeInfoOrPassword = (nameChange: string) => {
    if (isChangeInfoOrPassword === nameChange) {
      setIsChangeInfoOrPassword('none');
    } else {
      setIsChangeInfoOrPassword(nameChange);
    }
  };

  const onSubmitInfoOrPassword = () => {
    if (isChangeInfoOrPassword === 'info') {
      return formikInfo.handleSubmit;
    } if (isChangeInfoOrPassword === 'password') {
      return formikPassword.handleSubmit;
    }
  };
  const [state, setState] = useState(false);
  return (
    <StyledUserPage>
      {/* <Button
        loading={state}
        onClick={() => setState(!state)}
        className="custom__button"
      >Click Me</Button> */}
      <div className="styled__user__page--user__photo">
        {/* <img></img> */}
        <div className="styled__user__page--change__img">
          <img src={camera} alt="camera" />
        </div>
      </div>
      <div>
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
            {isChangeInfoOrPassword !== 'info' &&
              (<div className="styled__user__page--personal__information">
                <div className="styled__user__page--div__container">
                  <img src={profile} alt="profile" />
                  <div className="styled__text__div"
                    id="fullName"
                  >
                    <p>{formikInfo.values.fullName}</p>
                  </div>
                  <label className="styled__label" htmlFor="fullName">Name</label>
                </div>
                <div className="styled__user__page--div__container">
                  <img src={mail} alt="mail" />
                  <div className="styled__text__div"
                    id="email"
                  >
                    <p>{formikInfo.values.email}</p>
                  </div>
                  <label className="styled__label" htmlFor="email" id="email_label">Email</label>
                </div>
               </div>)
            }
            {isChangeInfoOrPassword === 'info' &&
              (<div className="styled__user__page--personal__information">
                <Input
                  onChange={formikInfo.handleChange}
                  className="styled__user__page-styled__text__input"
                  value={formikInfo.values.fullName}
                  placeHolder="Name"
                  nameInput="fullName"
                  icon={profile}
                  type="text"
                />
                <Input
                  onChange={formikInfo.handleChange}
                  className="styled__user__page-styled__text__input"
                  value={formikInfo.values.email}
                  placeHolder="Email"
                  nameInput="email"
                  icon={mail}
                  type="text"
                />
               </div>)
            }
            <div className="styled__user__page--place__with__changes">
              <p>Password</p>
              <p
                className="styled__user__page--switch__to__change"
                onClick={() => onChangeInfoOrPassword('password')}
              >Change password
              </p>
            </div>
            {isChangeInfoOrPassword !== 'password' &&
              (<div className="styled__user__page--personal__information">
                <div className="styled__user__page--div__container">
                  <img src={hide} alt="hide" />
                  <div className="styled__text__div"
                    id="password"
                  >
                    <input type="password" disabled value={formikPassword.values.password} />
                  </div>
                  <label className="styled__label" htmlFor="password">Password</label>
                </div>
               </div>)
            }

            {isChangeInfoOrPassword === 'password' &&
              (<div className="styled__user__page--personal__information">
                <Input
                  onChange={formikPassword.handleChange}
                  className="styled__user__page-styled__text__input"
                  value={formikPassword.values.password}
                  placeHolder="Password"
                  nameInput="password"
                  icon={hide}
                  type="password"
                />
                <Input
                  onChange={formikPassword.handleChange}
                  className="styled__user__page-styled__text__input"
                  value={formikPassword.values.newPassword}
                  placeHolder="New password"
                  nameInput="newPassword"
                  icon={hide}
                  type="password"
                />
                <Input
                  onChange={formikPassword.handleChange}
                  className="styled__user__page-styled__text__input"
                  value={formikPassword.values.repeatNewPassword}
                  placeHolder="Password replay"
                  nameInput="repeatPassword"
                  icon={hide}
                  type="password"
                />
               </div>)
            }
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
