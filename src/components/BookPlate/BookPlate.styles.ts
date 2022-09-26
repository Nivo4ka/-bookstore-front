import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 30px;

  .styled-bookplate__cover {
    width: 197px;
    height: 289px;
    margin-right: 20px;
  }

  .styled-bookplate__info {
    height: 289px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__text {
      width: 100%;

      p {
        max-height: 120px;
        color: ${(p) => p.theme.mainTheme.color.dark};
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
      }

      .styled-bookplate__description:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 25px;
        background: linear-gradient(180deg, transparent, ${(p) => p.theme.mainTheme.color.white} 80%);
      }
    }

    .styled-bookplate__count-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 200px;
      width: 100%;
      justify-content: space-between;

      p {
        color: ${(p) => p.theme.mainTheme.color.dark};
      }
      
      div {
        height: 32px;
        width: 32px;
        background: #F0F4EF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
      }

      svg {
        cursor: pointer;
      }

    }

    .styled-bookplate__price {
      font-weight: ${(p) => p.theme.font.weightP};
      line-height: 54px;
    }

    &__button {
      width: fit-content;
    }
  }

  @media (max-width: 1320px) {
    .styled-bookplate__cover {
      width: 197px;
      height: 289px;
    }
    .styled-bookplate__info {
      height: 289px;
    }

  }

  @media (max-width: 840px) {
    .styled-bookplate__cover {
      width: 160px;
      height: 235px;
    }
    .styled-bookplate__info {
      height: 235px;
    }
  }

  @media (max-width: 630px) {
    .styled-bookplate__cover {
      width: 135px;
      height: 202px;
    }

    .styled-bookplate__info {
      height: 202px;
    }
  }

`;
