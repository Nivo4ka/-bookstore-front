import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppSelector } from '../../store/hooks';
import mail from '../../images/icons/Mail.svg';
import profile from '../../images/icons/User_profile.svg';
import camera from '../../images/icons/Camera.svg';
import { StyledUserPage } from './UserPage.styles';
// import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';

const patchUserSchema = yup.object().shape({
  fullName: yup.string().required('Enter your name'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

const UserPage = () => {
  const userInfo = useAppSelector((state) => state.user.user);

  const formik = useFormik({
    initialValues: { fullName: userInfo?.fullName || '', email: userInfo?.email || '', password: 'password' },
    validationSchema: patchUserSchema,
    onSubmit: (values) => {
      // dispatch(singUpByPassEmail(values));
      // navigate('/');
    },
  });

  return (
    <StyledUserPage>
      <div className="styled__user__page--user__photo">
        {/* <img></img> */}
        <div className="styled__user__page--change__img">
          <img src={camera} alt="camera" />
        </div>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="styled__user__page--place__with__changes">
              <p>Personal information</p>
              <p className="styled__user__page--switch__to__change">Change information</p>
            </div>

            <div className="styled__user__page--personal__information">
              <div className="styled__user__page--div__container">
                <img src={profile} alt="profile" />
                <div className="styled__text__div"
                  id="fullName"
                >
                  <p>{formik.values.fullName}</p>
                </div>
                <label className="styled__label" htmlFor="fullName">Name</label>
              </div>
              <div className="styled__user__page--div__container">
                <img src={mail} alt="mail" />
                <div className="styled__text__div"
                  id="email"
                >
                  <p>{formik.values.email}</p>
                </div>
                <label className="styled__label" htmlFor="email" id="email_label">Email</label>
              </div>
            </div>
            {/* <div className='styled__user__page--personal__information'>
              <div className='styled__user__page--input__container'>
                <img src={profile} alt='profile' />
                <input
                  type="text"
                  name="fullName"
                  className='styled__text__input'
                  id='fullName'
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  required />
                <label className='styled__label' htmlFor='fullName'>Name</label>
              </div>
              <div className='styled__user__page--input__container'>
                <img src={mail} alt='mail' />
                <input
                  type="text"
                  name="email"
                  className='styled__text__input'
                  id='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required />
                <label className='styled__label' htmlFor='email' id='email_label'>Email</label>
              </div>
            </div> */}
            <div>
              <div className="styled__user__page--place__with__changes">
                <p>Password</p>
                <p className="styled__user__page--switch__to__change">Change password</p>
              </div>
              <div className="styled__user__page--personal__information">
                <div className="styled__user__page--input__container">
                  <img src={hide} alt="hide" />
                  <input
                    type="password"
                    name="password"
                    className="styled__text__input"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    required
                  />
                  <label className="styled__label" htmlFor="password" id="password_label">Password</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </StyledUserPage>
  );
};

export default UserPage;
