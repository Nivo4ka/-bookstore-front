import styled from 'styled-components';
import disabled from '../../images/icons/Disabled.svg';

export default styled.div`
  position: relative;
  width: 305px;
  height: 448px;
  background: ${(p) => p.theme.mainTheme.color.darkGrey};
  border-radius: ${(p) => p.theme.borderRadius};
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

      svg {
        stroke: ${(p) => p.theme.mainTheme.color.light};
        fill: ${(p) => p.theme.mainTheme.color.light};
      }
    }
    &__not-favorite {
      position: absolute;
      top: 20px;
      left: 20px;
      transition: 200ms ease all;

      :hover {
        opacity: 1;
      }

      svg {
        stroke: ${(p) => p.theme.mainTheme.color.light};
        fill: #0000;
        
      }
    }
  }

  .styled-bookcover__bookimg {
    object-fit: cover;
    border-radius: ${(p) => p.theme.borderRadius};
    width: 100%;
    height: 100%;
  }

`;
