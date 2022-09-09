import React from 'react';
import type { FormikErrors } from 'formik';
import { ReactComponent as View } from '../../images/icons/View.svg';
import { ReactComponent as Hide } from '../../images/icons/Hide.svg';
import Input from '../Input/Input';
import { StyledInfoSection } from './InfoSection.styles';

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
    <StyledInfoSection>
      {
        props.isChangeInfoOrPassword !== 'password'
          ? (<div className="styled-user-page__personal-information">
          <div className="styled-user-page__div-container">
            <Hide />
            <div className="styled-user-page__text-div"
              id="password"
            >
              <input type="password" disabled value="password" />
            </div>
            <label className="div-container__label" htmlFor="password">Password</label>
          </div>
             </div>)
          : (<div className="styled-user-page__personal-information">
          <Input
            onChange={props.onChange}
            className="styled-user-page__styled-text-input"
            value={props.password}
            placeHolder="Password"
            nameInput="password"
            Icon1={Hide}
            Icon2={View}
            type1="password"
            type2="text"
            error={props.errors?.password}
          />
          <Input
            onChange={props.onChange}
            className="styled-user-page__styled-text-input"
            value={props.newPassword}
            placeHolder="New password"
            nameInput="newPassword"
            Icon1={Hide}
            Icon2={View}
            type1="password"
            type2="text"
            error={props.errors?.newPassword}
          />
          <Input
            onChange={props.onChange}
            className="styled-user-page__styled-text-input"
            value={props.repeatNewPassword}
            placeHolder="Password replay"
            nameInput="repeatNewPassword"
            Icon1={Hide}
            Icon2={View}
            type1="password"
            type2="text"
            error={props.errors?.repeatNewPassword}
          />
             </div>)
      }
    </StyledInfoSection>
  );
};

export default PasswordSection;
