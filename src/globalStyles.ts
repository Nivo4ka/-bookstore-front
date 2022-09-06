import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  /* width: 100vw; */
  background-color: #fff;
  font-size: 20px;
  font-family: 'Poppins';
  font-style: normal;
  div{
    box-sizing: border-box;
  }
  p{
    
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
    margin: 0;
  }
  h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin: 0;
  }
  ul{
      margin: 0;
      padding: 0;
    }
  li{
    list-style-type: none;
  }

  .styled-button_secondary{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    border-radius: 16px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.75px;
    background: none;
    border-radius: 16px;
    border: 1px solid #0D1821;
    color: #0D1821;
    transition: all 0.05s ease;
    :hover{
      outline: 3px solid #0D1821;
      background: none;
      cursor: pointer;
    }
    :active{
      outline: 8px solid #d6d8e799;
    }
    :focus{
      outline: 8px solid #d6d8e799;
    }
  }

}
`;
