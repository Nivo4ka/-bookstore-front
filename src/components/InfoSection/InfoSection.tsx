import React from 'react';
import type { FormikErrors } from 'formik';
import mail from '../../images/icons/Mail.svg';
import profile from '../../images/icons/User_profile.svg';
import Input from '../Input/Input';
import { StyledInfoSection } from './InfoSection.styles';

type PropsType = {
  onChange?: (e: React.ChangeEvent) => void;
  fullName?: string;
  email?: string;
  isChangeInfoOrPassword?: string;
  errors?: FormikErrors<{
    email: string;
    fullName: string;
  }>;
} & React.PropsWithChildren;

const InfoSection: React.FC<PropsType> = (props) => {
  return (
    <StyledInfoSection>
      {
        props.isChangeInfoOrPassword !== 'info'
          ? (<div className="styled-user-page__personal-information">
            <div className="styled-user-page__div-container">
              <img src={profile} alt="profile" />
              <div className="styled-user-page__text-div"
                id="fullName"
              >
                <p>{props.fullName}</p>
              </div>
              <label className="div-container__label" htmlFor="fullName">Name</label>
            </div>
            <div className="styled-user-page__div-container">
              <img src={mail} alt="mail" />
              <div className="styled-user-page__text-div"
                id="email"
              >
                <p>{props.email}</p>
              </div>
              <label className="div-container__label" htmlFor="email" id="email_label">Email</label>
            </div>
             </div>)
          : (<div className="styled-user-page__personal-information">
            <Input
              onChange={props.onChange}
              className="styled-user-page__styled-text-input"
              value={props.fullName}
              placeHolder="Name"
              nameInput="fullName"
              icon1={profile}
              type1="text"
              error={props.errors?.fullName}
            />
            <Input
              onChange={props.onChange}
              className="styled-user-page__styled-text-input"
              value={props.email}
              placeHolder="Email"
              nameInput="email"
              icon1={mail}
              type1="text"
              error={props.errors?.email}
            />
             </div>)
      }
    </StyledInfoSection>
  );
};

export default InfoSection;
