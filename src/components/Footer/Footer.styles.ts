import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 341px;
  background-color: #0D1821;

  .styled-footer__container{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    color: #F0F4EF;
    img{
      margin-bottom: 20px;
    }
    p{
      color: #F0F4EF;
    }
  }
`;
