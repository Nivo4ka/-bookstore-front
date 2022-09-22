import styled, { css } from 'styled-components';

export default styled.button<{ disabled?: boolean; secondary?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  border-radius: ${(p) => p.theme.borderRadius};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.75px;
  transition: all 0.05s ease;
${(p) => {
    if (!p.secondary) {
      return css`
        color: ${(p) => p.theme.mainTheme.color.light};
        border: none;
        background: ${p.disabled ? '#B9BAC4' : '#344966'};
        ${!p.disabled && `
          background: ${p.theme.mainTheme.color.darkBlue};
          :hover {
            background: ${p.theme.mainTheme.color.dark};
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
      border-radius: ${(p) => p.theme.borderRadius};
      border: 1px solid ${p.disabled ? p.theme.mainTheme.color.darkGrey : p.theme.mainTheme.color.dark};
      color: ${p.disabled ? p.theme.mainTheme.color.darkGrey : p.theme.mainTheme.color.dark};
      ${!p.disabled && `
        :hover{
          outline: 3px solid ${p.theme.mainTheme.color.dark};
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
