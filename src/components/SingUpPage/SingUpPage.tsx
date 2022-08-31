import React from 'react';
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import man from '../../images/man.svg';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
// import hide from '../../images/icons/Hide.svg';
import { StyledSingUpPage } from './SingUpPage.styles';
import singUpByPassEmail from '../../store/slices/user/thunks/singup';
import { useAppDispatch } from '../../store/hooks';
import Input from '../Input/Input';
import Button from '../Button/Button';

const singupSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'Too Short!')
    .matches(/^[a-zA-Z0-9-_]{8,}$/, 'The password must consist of numbers and latin characters')
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

interface IState {
  from?: { pathname: string };
}

const SingUpPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: { email: '', password: '', repeatPassword: '' },
    validationSchema: singupSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(singUpByPassEmail(values)).unwrap();
        const { from } = location.state as IState;
        if (from) {
          navigate(from.pathname);
        } else {
          navigate('/');
        }
        // handle result here
      } catch (rejectedValueOrSerializedError) {
        // handle error here
      }
    },
  });

  return (

    <StyledSingUpPage>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            placeHolder="Email"
            nameInput="email"
            icon={mail}
            type="text"
            error={formik.errors.email}
          />
          <Input
            onChange={formik.handleChange}
            className="styled__user__page-styled__text__input"
            value={formik.values.password}
            placeHolder="Password"
            nameInput="password"
            icon={view}
            type="text"
            error={formik.errors.password}
          />
          <Input
            onChange={formik.handleChange}
            className="styled__user__page-styled__text__input"
            value={formik.values.repeatPassword}
            placeHolder="Password replay"
            nameInput="repeatPassword"
            icon={view}
            type="text"
            error={formik.errors.repeatPassword}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
      <img src={man} alt="man" />
    </StyledSingUpPage>

  );
};

export default SingUpPage;
