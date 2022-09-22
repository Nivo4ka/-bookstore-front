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
    width: 370px;
    height: 550px;

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
      margin-right: 25px;
    }
    p{
      font-size: 16px;
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
  }

  .styled-bookpage__description {
    width: 630px;
    font-size: 16px;
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

`;
