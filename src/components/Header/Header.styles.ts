import styled from 'styled-components';

export default styled.div`
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
  .styled-header__input-area{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    p{
      margin-right: 43px;
    }
  }

  .styled-header__search-input{
    width: 566px !important;
    :focus{
      background: #FFFFFF;
    }
    :valid ~ .styled__label {
      color: #B9BAC4;
    }
  }

  .styled-header__img-button{
    margin-left: 27px;
    svg{
      stroke: #F0F4EF;
      fill: #0000;
    }
  }

  .styled-header__menu{
    display: flex;
    flex-direction: row;
  }
  
`;
