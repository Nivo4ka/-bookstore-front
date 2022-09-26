import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .styled-bookpage__book-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
    width: 100%;
  }

  .styled-bookpage__cover {
    width: 525px;
    height: 780px;

    .styled-bookcover {

      &__favorite {
        right: 20px !important;
        left: auto;
      }

      &__not-favorite {
        right: 20px !important;
        left: auto;
      }
  }
  }

  .styled-bookpage__info {
    width: fit-content;
  }

  .styled-bookpage__rating-area {
    display: flex;
    flex-direction: row;
    align-items: start;
    margin: 25px 0 20px 0;
    &__star{
      stroke: #BFCC94;
      margin-right: 22px;
    }
    p {
      line-height: 30px;
      color: ${(p) => p.theme.mainTheme.color.darkGrey};
      margin: 0 40px 0 0;
    }
    &__to-rate {
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        stroke: ${(p) => p.theme.mainTheme.color.darkGrey};
        margin-right: 7px;
      }
    }

    .styled-bookpage__user-rating-area {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .styled-bookpage__description-area-2 {
    display: none;
  }

  .styled-bookpage__description {
    max-width: 630px;
    width: 100%;
    font-size: ${(p) => p.theme.font.sizePMiddle};
    line-height: 24px;
    word-wrap: break-word;
    &-title {
      margin-bottom: 10px;
      font-size: 24px;
      color: ${(p) => p.theme.mainTheme.color.dark};
      line-height: 36px;
    }
  }

  .styled-bookpage__button-area {
    margin-top: 50px;
    display: flex;
    flex-direction: row;

    .styled-bookpage__description {
      margin-bottom: 10px;
      width: fit-content;
    }

    &__button {
      margin-right: 60px;
      
      :last-child {
        margin-right: 0;
      }
    }
  }

  .styled-bookpage__comments-area {
    margin-bottom: 30px;
  }

  @media (max-width: 1320px) {
    .styled-bookpage__cover {
      width: 450px;
      height: 670px;
      margin-right: 20px;
    }
  }

  @media (max-width: 1135px) {
    .styled-bookpage__cover {
      width: 390px;
      height: 580px;
    }

    .styled-bookpage__description {
      font-size: ${(p) => p.theme.font.sizePSmall};
    }
  }

  @media (max-width: 1070px) {
    .styled-bookpage__cover {
      width: 300px;
      height: 445px;
    }

    .styled-bookpage__rating-area {
      flex-wrap: wrap;

      p {
        margin: 0;
      }
    }

    .styled-bookpage__user-rating-area {
      order: 1;
      width: 100%;
    }
  }

  @media (max-width: 745px) {
    .styled-bookpage__rating-area {
      &__star{
        width:20px;
        height: 20px;
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 705px) {
    .styled-bookpage__rating-area {
      &__star{
        width:18px;
        height: 18px;
        margin-right: 15px;
      }
    }
  }

  @media (max-width: 670px) {
    .styled-bookpage__cover {
      width: 230px;
      height: 340px;
    }
    .styled-bookpage__info {
      flex-wrap: wrap;
    }
    .styled-bookpage__description-area {
      display: none;
    }

    .styled-bookpage__description-area-2 {
      display: flex;
      flex-direction: column;
    }

    .styled-bookpage__button-area {
      justify-content: space-between;

      &__button {
        margin-right: 0;
      }
    }

    .styled-bookpage__rating-area {
      &__star{
        width:15px;
        height: 15px;
        margin-right: 15px;
      }

      .styled-bookpage__user-rating-area {
        flex-wrap: wrap;
        .styled-bookpage__rating-area__to-rate {
          order: 1;
          width: 100%;
        svg {
          display: none;
        }
      }
    }
    }

    .styled-bookpage__book-content {
      margin-bottom: 20px;
    }
    
  }

  @media (max-width: 500px) {
    .styled-bookpage__cover {
      width: 135px;
      height: 200px;
    }
  }

  @media (max-width: 365px) {
    .styled-bookpage__rating-area {
      &__star{
        width:12px;
        height: 12px;
        margin-right: 7px;
      }
    }
  }

`;
