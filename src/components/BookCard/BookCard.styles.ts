import styled from 'styled-components';
import disabled from '../../images/icons/Disabled.svg';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .styled-bookcard__cover {
    position: relative;
    width: 305px;
    height: 448px;
    background: #C4C4C4;
    border-radius: 16px;
    background-repeat: no-repeat;
    margin-bottom: 10px;
    background-size: 100px;
    background-image: url(${disabled});
    background-position: center center;
    overflow: hodden;
    cursor: pointer;
  }
  .styled-bookcard__favorite{
    position: absolute;
    top: 20px;
    left: 20px;
    transition: 200ms ease all;
    :hover{
      opacity: 1;
    }
  }

  .styled-bookcard__bookimg{
    object-fit: cover;
    border-radius:16px;
    width: 100%;
    height: 100%;
  }

  .styled-bookcard__title{
    margin: 30px 0 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .styled-bookcard__autor{
    color: #B9BAC4;
  }
  .styled-bookcard__rating-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    &__star{
      stroke: #BFCC94;
      margin-right: 25px;
    }
    ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    li{
      display: inline;
      svg{
        stroke: #BFCC94;
        fill: #BFCC94;
      }
    }
    p{
      font-size: 16px;
      line-height: 24px;
      color: #B9BAC4;
      margin: 0 7px 0 0;
    }
  }
`;
