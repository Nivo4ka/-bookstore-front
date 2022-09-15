import styled from 'styled-components';
import disabled from '../../images/icons/Disabled.svg';

export default styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .styled-bookpage__book-content {
    display: flex;
    flex-direction: row;
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
    margin-right: 120px;
    background-size: 100px;
    background-image: url(${disabled});
    background-position: center center;
    overflow: hodden;
    cursor: default;

    &__favorite {
      position: absolute;
      top: 20px;
      right: 20px;
      transition: 200ms ease all;
      :hover{
        opacity: 1;
      }
    }

  &__bookimg {
    object-fit: cover;
    border-radius:16px;
    width: 100%;
    height: 100%;
  }
  }

  .styled-bookpage__rating-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 25px 0 20px 0;
    &__star{
      stroke: #BFCC94;
      margin-right: 25px;
    }
    p{
      font-size: 16px;
      line-height: 24px;
      color: #B9BAC4;
      margin: 0 7px 0 0;
    }
  }

  .styled-bookpage__description {
    width: 330px;
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
