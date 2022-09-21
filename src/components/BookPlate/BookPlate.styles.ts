import styled from 'styled-components';
import disabled from '../../images/icons/Disabled.svg';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 289px;
  padding-top: 30px;

  .styled-bookplate__cover {
    position: relative;
    width: 197px;
    height: 289px;
    background: #C4C4C4;
    border-radius: 16px;
    background-repeat: no-repeat;
    background-size: 100px;
    background-image: url(${disabled});
    background-position: center center;
    overflow: hodden;
    cursor: pointer;
  
    .styled-bookplate__bookimg{
      object-fit: cover;
      border-radius:16px;
      width: 100%;
      height: 100%;
    }
  }

  .styled-bookplate {
    &__favorite {
      position: absolute;
      top: 20px;
      left: 20px;
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
      left: 20px;
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
        color: #0D1821;
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
        background: linear-gradient(180deg, transparent, #fff 80%);
      }
    }

    .styled-bookplate__count-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 200px;
      justify-content: space-between;

      p {
        color: #0D1821;
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
      font-weight: 500;
      font-size: 36px;
      line-height: 54px;
    }

    &__button {
      width: fit-content;
    }
  }

`;
