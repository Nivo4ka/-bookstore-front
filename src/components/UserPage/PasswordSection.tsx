import React from 'react';
import type { FormikErrors } from 'formik';
// import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';
import Input from '../Input/Input';

type PropsType = {
  // onClick?: () => void;
  onChange?: (e: React.ChangeEvent) => void;
  password?: string;
  newPassword?: string;
  repeatNewPassword?: string;
  isChangeInfoOrPassword?: string;
  errors?: FormikErrors<{
    password: string;
    newPassword: string;
    repeatNewPassword: string;
  }>;
} & React.PropsWithChildren;

const PasswordSection: React.FC<PropsType> = (props) => {
  return (
    <div>
      {
        props.isChangeInfoOrPassword !== 'password' &&
        (<div className="styled__user__page--personal__information">
          <div className="styled__user__page--div__container">
            <img src={hide} alt="hide" />
            <div className="styled__text__div"
              id="password"
            >
              <input type="password" disabled value="password" />
            </div>
            <label className="styled__label" htmlFor="password">Password</label>
          </div>
         </div>)
      }
      {
        props.isChangeInfoOrPassword === 'password' &&
        (<div className="styled__user__page--personal__information">
          <Input
            onChange={props.onChange}
            className="styled__user__page-styled__text__input"
            value={props.password}
            placeHolder="Password"
            nameInput="password"
            icon={hide}
            type="password"
            error={props.errors?.password}
          />
          <Input
            onChange={props.onChange}
            className="styled__user__page-styled__text__input"
            value={props.newPassword}
            placeHolder="New password"
            nameInput="newPassword"
            icon={hide}
            type="password"
            error={props.errors?.newPassword}
          />
          <Input
            onChange={props.onChange}
            className="styled__user__page-styled__text__input"
            value={props.repeatNewPassword}
            placeHolder="Password replay"
            nameInput="repeatNewPassword"
            icon={hide}
            type="password"
            error={props.errors?.repeatNewPassword}
          />
         </div>)
      }
    </div>
  );
};

export default PasswordSection;
