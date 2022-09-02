import styled from 'styled-components';
import profile from '../../images/icons/User_profile.svg';

export const StyledUserPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  padding-right: 340px;

  .styled__user__page--user__photo{
    position: relative;
    width: 305px;
    height: 305px;
    background: #F0F4EF;
    border-radius: 16px;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    background-size: 151px;
    background-image:url(${profile});
    background-position: center center;
    overflow: hodden;
    .styled-user-page__avatar{
      object-fit: cover;
      border-radius:16px;
      width: 100%;
      height: 100%;
    }
  }

  .styled-user-page__input-file{
    display: none;
  }

  .styled__user__page--change__img{
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .styled__user__page--place__with__changes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;

    .styled__user__page--switch__to__change{
      font-size: 14px;
      line-height: 21px;
      text-decoration-line: underline;
      color: #8D9F4F;
      cursor: pointer;
    }
  }

  .styled__user__page--input__container{
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img{
      position: absolute;
      left: 26px;
    }

  }

  .styled__user__page--personal__information{
    margin-bottom: 40px;
  }

  .styled__user__page-styled__text__input{
    width: 458px !important;
  }

  .styled__text__div{
    background: #F0F4EF;
    border-radius: 16px;
    width: 522px;
    height: 64px;
    padding:30px 0 0 64px;
    box-sizing: border-box;
    text-align: start;
    p{
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: #0D1821;
      font-weight: 400;
    }
    input{
      box-sizing: border-box;
      background: #F0F4EF;
      outline: none;
      border: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: #0D1821;
    }
  }

  .styled__user__page--div__container{
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    box-sizing: border-box;
    img{
      position: absolute;
      left: 26px;
    }
    .styled__label{
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: #344966;
      transform: scale(0.8) translate3d(0, -20px, 0);
    }

    
  }

  .custom__button {
    background-color: blue;
  }

  .styled__user__page--form__container{
    margin-bottom: 100px;
  }
`;
