import React from 'react';
import type { FormikErrors } from 'formik';
import mail from '../../images/icons/Mail.svg';
import profile from '../../images/icons/User_profile.svg';
import Input from '../Input/Input';

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
    <div>
      {
        props.isChangeInfoOrPassword !== 'info' &&
        (<div className="styled__user__page--personal__information">
          <div className="styled__user__page--div__container">
            <img src={profile} alt="profile" />
            <div className="styled__text__div"
              id="fullName"
            >
              <p>{props.fullName}</p>
            </div>
            <label className="styled__label" htmlFor="fullName">Name</label>
          </div>
          <div className="styled__user__page--div__container">
            <img src={mail} alt="mail" />
            <div className="styled__text__div"
              id="email"
            >
              <p>{props.email}</p>
            </div>
            <label className="styled__label" htmlFor="email" id="email_label">Email</label>
          </div>
         </div>)
      }
      {
        props.isChangeInfoOrPassword === 'info' &&
        (<div className="styled__user__page--personal__information">
          <Input
            onChange={props.onChange}
            className="styled__user__page-styled__text__input"
            value={props.fullName}
            placeHolder="Name"
            nameInput="fullName"
            icon={profile}
            type="text"
            error={props.errors?.fullName}
          />
          <Input
            onChange={props.onChange}
            className="styled__user__page-styled__text__input"
            value={props.email}
            placeHolder="Email"
            nameInput="email"
            icon={mail}
            type="text"
            error={props.errors?.email}
          />
         </div>)
      }
    </div>
  );
};

export default InfoSection;
