import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;

  h2 {
    margin-block-start: 0;
    margin-block-end: 60px;
  }

  .styled-login__img {
    width: 600px;
    height: auto;
  }

  @media (max-width: 1000px) {
    .styled-login__img {
      width: 390px;
    }
  }

  @media (max-width: 670px) {
    .styled-login__img {
      width: 100%;
      max-width: 670px;
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 30px;
    }
    .styled-login__input {
      max-width: 670px;
      width: 100%;
    }

    form {
      width: 100%;
      max-width: 670px;
    }

    div {
      width: 100%;
    }

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
