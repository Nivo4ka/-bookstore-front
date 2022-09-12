import styled from 'styled-components';
import fairy from '../../images/fairy.svg';

export const StyledSingUpBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-color: #F0F4EF;
  margin-bottom: 150px;
  margin-top: 62px;
  background-size: auto;
  background-image:url(${fairy});
  background-position: bottom right;
  justify-content: flex-end;
  div{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  }
  
  img{
    position: absolute;
    left: 108px;
  }
  h2{
    margin-bottom: 10px;
  }
  p{
    width: 415px;
    margin-bottom: 50px;
  }
  .styled-singup-banner__info-area{
    height: 100%;
    margin-right: 108px;
  }
  
`;
