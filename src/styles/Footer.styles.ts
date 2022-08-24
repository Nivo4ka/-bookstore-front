import styled, { css } from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 341px;
  background-color: #0D1821;

  .styled__footer--container{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    color: #F0F4EF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    ul{
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
    }
    p{
      margin-block-start: 0;
      margin-block-end: 0;
    }
    li{
      list-style-type: none;
    }
    img{
      margin-bottom: 20px;
    }
  }
`;