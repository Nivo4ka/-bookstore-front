import styled from 'styled-components';
import disabled from '../../images/icons/Disabled.svg';

export default styled.div`
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
  cursor: pointer;
  .styled-bookcover {
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

  .styled-bookcover__bookimg{
    object-fit: cover;
    border-radius:16px;
    width: 100%;
    height: 100%;
  }

`;
