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
    /* justify-content: flex-end; */
  }

  .styled__user__page--change__img{
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: #344966;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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

  .styled__text__input{
    width: 458px;
  }

  .styled__text__div{
    background: #F0F4EF;
    border-radius: 16px;
    width: 100%;
    height: 64px;
    padding:30px 0 0 64px;
    p{
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.75px;
      color: #0D1821;
      font-weight: 400;
    }
  }

  .styled__user__page--div__container{
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
`;
