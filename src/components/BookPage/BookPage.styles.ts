import styled from 'styled-components';
import disabled from '../../images/icons/Disabled.svg';

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
    position: relative;
    background: #C4C4C4;
    border-radius: 16px;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    background-size: 100px;
    background-image: url(${disabled});
    background-position: center center;
    overflow: hodden;
    cursor: default;

    &__bookimg {
      object-fit: cover;
      border-radius:16px;
      width: 100%;
      height: 100%;
    }
  }

  .styled-bookpage {
    &__favorite {
      position: absolute;
      top: 20px;
      right: 20px;
      transition: 200ms ease all;
      opacity: 1;
      svg{
        stroke: #F0F4EF;
        fill: #F0F4EF;
      }
    }
    &__not-favorite {
      position: absolute;
      top: 20px;
      right: 20px;
      transition: 200ms ease all;
      :hover{
        opacity: 1;
      }
      svg {
        stroke: #F0F4EF;
        fill: #0000;
        
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
      color: #B9BAC4;
      margin: 0 40px 0 0;
    }
    &__to-rate {
      display: flex;
      flex-direction: row;
      align-items: center;
      svg {
        stroke: #B9BAC4;
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
    color: #0D1821;
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
