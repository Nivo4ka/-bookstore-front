import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

  svg {
    stroke: ${(p) => p.theme.mainTheme.color.dark};
    cursor: pointer;
  }

  .pagination__point {
    width: 20px;
    height: 20px;
    margin-right: 30px;
    color: #00000000;

    :last-child {
      margin-right: 0;
    }

    &_choice {
      color: ${(p) => p.theme.mainTheme.color.dark};
    }
  }

  .pagination__container {
    display: flex;
    align-items: center;
  }

  .pagination__back {
    margin-right: 50px;
  }

  .pagination__forward {
    margin-left: 50px;
  }
`;
