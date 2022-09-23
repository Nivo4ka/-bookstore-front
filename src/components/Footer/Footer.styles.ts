import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 341px;
  background-color: ${(p) => p.theme.mainTheme.color.dark};

  .styled-footer__container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    color: ${(p) => p.theme.mainTheme.color.light};

    img {
      margin-bottom: 20px;
    }

    .styled-footer__map {
      width: 100%;
      max-width: 392px;
      height: 160px;
      object-fit: cover;
      border-radius: 6px;
    }

    p {
      color: ${(p) => p.theme.mainTheme.color.light};
    }
  }

  @media (max-width: 760px) {
    height: 650px;
    .styled-footer__container {
      height: 90%;
      flex-direction: column;
      max-width: 310px;
    }
  }
`;
