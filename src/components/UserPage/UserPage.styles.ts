import styled from 'styled-components';
import profile from '../../images/icons/User_profile.svg';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  padding-right: 340px;

  .styled-user-page__user-photo{
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

  .styled-user-page__change-img{
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .styled-user-page__place-with-changes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;

    .styled-user-page__switch-to-change{
      font-size: 14px;
      line-height: 21px;
      text-decoration-line: underline;
      color: #8D9F4F;
      cursor: pointer;
    }
  }

  .styled-user-page__form-container{
    margin-bottom: 100px;
  }
`;
