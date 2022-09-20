import styled, { css } from 'styled-components';

export default styled.button<{ disabled?: boolean; secondary?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  border-radius: 16px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.75px;
  transition: all 0.05s ease;
${(p) => {
    if (!p.secondary) {
      return css`
        color: #F0F4EF;
        border: none;
        background: ${p.disabled ? '#B9BAC4' : '#344966'};
        ${!p.disabled && `
          background: #344966;
          :hover {
            background: #0D1821;
            cursor: pointer;
          }
          :active {
            outline: 8px solid #d6d8e799;
          }
          :focus {
            outline: 8px solid #d6d8e799;
          }
        `}
    `;
    }
    return css`
      background: none;
      border-radius: 16px;
      border: 1px solid ${p.disabled ? '#B9BAC4' : '#0D1821'};
      color: ${p.disabled ? '#B9BAC4' : '#0D1821'};
      ${!p.disabled && `
        :hover{
          outline: 3px solid #0D1821;
          background: none;
          cursor: pointer;
        }
        :active{
          outline: 8px solid #d6d8e799;
        }
        :focus{
          outline: 8px solid #d6d8e799;
        }
      `}
    `;
  }}
  


  
`;
