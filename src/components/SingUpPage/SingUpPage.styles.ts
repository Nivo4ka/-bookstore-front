import styled from 'styled-components';

export const StyledSingUpPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;

  h2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin-block-start: 0;
    margin-block-end: 60px;
  }

  .styled__singup__page--input__container{
    position: relative;
    display: flex;
    align-items: center;
    img{
      position: absolute;
      left: 26px;
    }

  }

`;
