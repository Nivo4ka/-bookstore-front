import styled, { createGlobalStyle, css } from "styled-components";

export const StyledPrimaryButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  background: #344966;
  border-radius: 16px;
  color: #F0F4EF;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.75px;
  transition: all 0.05s ease;
  :hover{
    background: #0D1821;
    cursor: pointer;
  }
  :active{
    outline: 8px solid #d6d8e799;
  }
  :focus{
    outline: 8px solid #d6d8e799;
  }
`;

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  background: none;
  border-radius: 16px;
  border: 1px solid #0D1821;
  color: #0D1821;
  transition: all 0.05s ease;
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
`;



export const StyledLabel = styled.label`
  position: absolute;
  left: 64px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  color: #B9BAC4;
  /* height: 0; */
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 28px; */
  transform-origin: left bottom;
  transform: scale(1) translate3d(0, 0, 0);
  transition: 200ms ease all;
  cursor: inherit;
`;

export const StyledTextInput = styled.input`
  background: #F0F4EF;
  border-radius: 16px;
  outline: none;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #0D1821;
  width: 349px;
  height: 64px;
  padding:0 0 0 64px;
  ::placeholder{
    
  }
  :focus{
    outline: 2px solid #0D1821;
  }
  :valid{
    height: 34px;
    padding:30px 0 0 64px;
  }
  
  /* :focus ~ ${StyledLabel} {
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.75px;
    color: #B9BAC4;
    
    transform: scale(0.8) translate3d(0, -14px, 0);
  } */
  :valid ~ ${StyledLabel} {
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.75px;
    color: #344966;
    transform: scale(0.8) translate3d(0, -20px, 0);
  }
`;

export const StyledSearchInput = styled(StyledTextInput).attrs({ type: "text" })`
  width: 566px;
  :focus{
    background: #FFFFFF;
  }
  :valid ~ ${StyledLabel} {
    color: #B9BAC4;
  }
`;
