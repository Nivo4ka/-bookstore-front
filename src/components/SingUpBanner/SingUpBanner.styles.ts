import styled from 'styled-components';
import fairy from '../../images/fairy.svg';
import fairy2 from '../../images/fairy2.svg';

export default styled.div`
  padding-top: 62px;
  padding-bottom: 100px;
  width: 100%;
  
  .styled-singup-banner__back {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    border-radius: ${(p) => p.theme.borderRadius};
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-color: ${(p) => p.theme.mainTheme.color.light};
    background-size: auto;
    background-image:url(${fairy});
    background-position: bottom right;
    justify-content: flex-end;
  }
  
  img {
    position: absolute;
    left: 108px;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    width: 415px;
    margin-bottom: 50px;
  }

  .styled-singup-banner__info-area {
    height: 100%;
    margin-right: 108px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 1180px) {
    img {
      width: 380px;
      left: 0;
    }

    .styled-singup-banner__info-area {
      margin-right: 10px;
    }

    p {
      width: 249px;
    }
  }

  @media (max-width: 670px) {
    .styled-singup-banner__back {
      height: 500px;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      background-image:url(${fairy2});
      background-position: top right;
    }

    .styled-singup-banner__info-area {
      justify-content: flex-start;
      margin-right: 0;
      button {
        width: 100%;
        max-width: 230px;
      }
      padding: 10px;
    }

    p {
      margin-bottom: 20px;
      max-width: 230px;
      width: 100%;
    }
    
    img {
      position: relative;
      max-width: 280px;
      width: 100%;
      bottom: 0;
      left: auto;
    }

  }
  
`;
