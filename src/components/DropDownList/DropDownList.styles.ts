import styled, { css } from 'styled-components';

export const StyledDropDownList = styled.div<{ isActive: boolean; name: string }>`
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
    cursor: pointer;
    p{
      font-size: 18px;
      padding: 10px 0 10px 15px;
    }

    svg{
    margin-right: 8px;
    transition: 200ms ease all;
    stroke: ${(p) => (!p.name.includes('Sort by') ? '#344966' : '#0D1821')};
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
    white-space: nowrap;
    width: fit-content;
    p{
      color: #0D1821;
      margin-right: 20px;
    }
  }

  .styled-drop-down-list__list{
    position: absolute;
    display: none;
    flex-direction: row;
    align-items: center;
    top: 76px;
    margin-left: 20px;
    z-index: -1;
    transition: 10ms ease all;
    ${(p) => {
    if (p.isActive) {
      return css`
        display: flex;
        z-index: 1;
        `;
    }
  }}
  }

  .list__decoration{
    position: absolute;
    top: -23px;
    left: 7px;
    border: 15px solid transparent;
    border-bottom: 15px solid #F0F4EF;
  }

  .main-info__price-area{
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    width: 300px;
    height: 500px;

  }
`;
