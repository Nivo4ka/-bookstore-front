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
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    color: ${(p) => p.theme.mainTheme.color.light};

    img {
      margin-bottom: 20px;
    }

    p {
      color: ${(p) => p.theme.mainTheme.color.light};
    }

    @media (max-width: 1295px) {
      width: 805px;
    }
  }
`;
