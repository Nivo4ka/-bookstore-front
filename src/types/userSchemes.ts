import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'Too Short!')
    .required('Enter your password'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

const SingupSchema = yup.object().shape({
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

const PatchUserSchema = yup.object().shape({
  fullName: yup.string().required('Enter your name'),
  email: yup.string().email('Invalid email').required('Enter your email'),
});

export default {
  LoginSchema,
  SingupSchema,
  PatchUserSchema,
};
