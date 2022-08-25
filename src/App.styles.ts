import styled, { css } from 'styled-components';

export const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  .styled__app--container{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    min-height: calc(100vh - 341px);
  }
`;
