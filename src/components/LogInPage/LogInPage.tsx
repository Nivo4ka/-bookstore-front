import React, { useState } from 'react';
import UserDataService from '../../services/user.service';
import { IUserData, IUserLogin } from '../../types/user.datatype';
import { StyledLogInPage } from '../../styles/LogInPage.styles';
import man from '../../images/man.svg';
import { StyledLabel, StyledPrimaryButton, StyledTextInput } from '../../styles/BasicThings.styles';
import mail from '../../images/icons/Mail.svg';
import view from '../../images/icons/View.svg';
import hide from '../../images/icons/Hide.svg';

const LogInPage = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, email: e.target.value })

  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, password: e.target.value })
  }
  const goToUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginUser.email && loginUser.password) {
      UserDataService.login(loginUser)
        .then((response: any) => {
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }

  }

  return (
    <StyledLogInPage>
      <div>
        <h2>Log In</h2>
        <form onSubmit={goToUser}>
          <div className='styled__login__page--input__container'>
            <img src={mail} alt='mail' />
            <StyledTextInput
              id='email'
              type='text'
              required
              value={loginUser.email}
              onChange={onChangeEmail}
            />
            <StyledLabel htmlFor='email'>Email</StyledLabel>
          </div>
          <div className='styled__login__page--input__container'>
            <img src={view} alt='view' />
            <StyledTextInput
              id='password'
              type='text'
              required
              value={loginUser.password}
              onChange={onChangePassword}
            />
            <StyledLabel htmlFor='password'>Password</StyledLabel>
          </div>

          <StyledPrimaryButton>Log In</StyledPrimaryButton>
        </form>

      </div>
      <img src={man} alt='man'></img>
    </StyledLogInPage>
  );
}

export default LogInPage;
