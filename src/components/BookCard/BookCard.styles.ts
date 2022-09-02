import styled from 'styled-components';

export const StyledBookCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .styled__bookcard--favorite{
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .styled__bookcard--bookimg{
    border-radius: 16px;
    object-fit: cover;
    height: 100%;

  }

  .styled__bookcard--title{
    margin: 30px 0 0 0;
  }
  .styled__bookcard--autor{
    color: #B9BAC4;
  }
  .styled__bookcard--rating__area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    li{
      display: inline;
    }
    p{
      font-size: 16px;
      line-height: 24px;
      color: #B9BAC4;
      margin: 0 7px 0 25px;
    }
  }
`;
