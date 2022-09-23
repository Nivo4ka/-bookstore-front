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
    font-size: ${(p) => p.theme.font.sizePMiddle};
    line-height: 24px;
    color: ${(p) => p.theme.mainTheme.color.dark};
  }

  .styled-header__logo {
    width: 88px;
    height: auto;
  }

  .styled-header__input-area {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* width: 100%; */
    justify-content: center;

    p {
      margin: 0 20px;
    }
  }

  .styled-header__search-input {
    width: 100% !important;
    max-width: 630px;

    .styled-input__input {
      :focus{
        background: ${(p) => p.theme.mainTheme.color.white};
      }
      :valid ~ .styled__label {
        color: ${(p) => p.theme.mainTheme.color.darkGrey};
      }
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

  >button {
    margin-left: 20px;
  }

  @media (max-width: 670px) {
    >button {
      margin-left: 0;
    }
    P {
      font-size: ${(p) => p.theme.font.sizePSmall};
    }
    flex-wrap: wrap;
    margin-bottom: 25px;
    .styled-header__search-input {
      width: 100%;
      max-width: 715px;
      order: 1;
      margin: 15px 0;
    }

    .styled-header__input-area {
      p {
        margin: 0;
      }
    }

    .styled-header__logo {
      width: 62px;
    }

    .styled-header__img-button {
      :not(:first-child) {
        margin-left: 18px;
      }
      :first-child {
        margin-left: 0;
      }
    }
  }
  
`;
