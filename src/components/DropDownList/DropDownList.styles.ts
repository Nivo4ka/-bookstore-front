import styled, { css } from 'styled-components';

export const StyledDropDownList = styled.div<{ isActive: boolean }>`
  position: relative;
  .styled-drop-down-list__name{
    position: relative;
    margin-left: 20px;
    background-color: #F0F4EF;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 196px;
    height: fit-content;
    p{
      font-size: 18px;
      padding: 10px 0 10px 15px;
    }

    img{
    margin-right: 8px;
    transition: 200ms ease all;
    ${(p) => {
    if (p.isActive) {
      return css`
        transform: rotate(90deg);
        `;
    }
  }}
  }
  }

  .styled-drop-down-list__name_last-child{
    background: none;
    p{
      color: #0D1821;
    }
  }

  .styled-drop-down-list__list{
    position: absolute;
    display: none;
    flex-direction: row;
    opacity: 0;
    align-items: center;
    top: 76px;
    margin-left: 20px;
    z-index: -1;
    transition: 100ms ease all;
    transform: translateY(-50%);
    ${(p) => {
    if (p.isActive) {
      return css`
        display: flex;
        z-index: 1;
        animation: output 1s forwards;
        `;
    }
    if (!p.isActive) {
      return css`
      display: flex;
      animation: inside 1s forwards;
      `;
    }
  }}
  }

  @keyframes output {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    
  }
}

@keyframes inside {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50%);
    opacity: 0;
    display: none;
  }
}

  .list__decoration{
    position: absolute;
    top: -23px;
    left: 7px;
    border: 15px solid transparent;
    border-bottom: 15px solid #F0F4EF;
    /* border: 20px solid transparent; border-bottom: 20px solid green; */
  }

  .list__main-info{
    padding: 10px;
    background-color: #F0F4EF;
    border-radius: 16px;
    
    p{
      display: inline-block;
      margin: 5px 78px 5px 5px;
      white-space: nowrap;
    }
    li{
      display: flex;
      flex-direction: row;
      align-items: center;
      input{
        margin: 0 5px;
      }
    }
  }
`;
