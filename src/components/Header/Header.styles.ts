import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 45px;
  margin-top: 24px;

  p {
    font-size: 16px;
    line-height: 24px;
    color: ${(p) => p.theme.mainTheme.color.dark};
  }

  .styled-header__input-area {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      margin-right: 43px;
    }
  }

  .styled-header__search-input {
    width: 566px !important;

    :focus{
      background: ${(p) => p.theme.mainTheme.color.white};
    }
    :valid ~ .styled__label {
      color: ${(p) => p.theme.mainTheme.color.darkGrey};
    }

    @media (max-width: 1295px) {
      width: 183px !important;
    }

    @media (max-width: 840px) {
      width: 290px !important;
    }
  }

  .styled-header__img-button {
    margin-left: 27px;

    svg {
      stroke: ${(p) => p.theme.mainTheme.color.light};
      fill: #0000;
      position: absolute;
    }
  }

  .styled-header__favorite-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .styled-header__favorite-info {
    position: absolute;
    top: -30px;
    right: -30px;
    background: ${(p) => p.theme.mainTheme.color.green};
    border-radius: 50%;
    width: 23px;
    height: 23px;
    text-align: center;

    p {
      color: #344966;
      font-weight: ${(p) => p.theme.font.weightH2};
      font-size: 12px;
    }
  }

  .styled-header__menu {
    display: flex;
    flex-direction: row;
  }
  
`;
