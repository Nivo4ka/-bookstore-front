import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 24px;


  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .styled__header-catalog_input_area{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    p{
      margin-right: 43px;
    }
  }
  .styled__header-input_area{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
      position: absolute;
      left: 26px;
    }
  }

  .styled__header--search__input{
    width: 566px;
    :focus{
      background: #FFFFFF;
    }
    :valid ~ .styled__label {
      color: #B9BAC4;
    }
  }
  
`;
