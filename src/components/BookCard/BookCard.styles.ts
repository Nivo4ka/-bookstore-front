import styled from 'styled-components';

export const StyledBookCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .styled-bookcard__favorite{
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .styled-bookcard__bookimg{
    border-radius: 16px;
    object-fit: cover;
    height: 100%;

  }

  .styled-bookcard__title{
    margin: 30px 0 0 0;
  }
  .styled-bookcard__autor{
    color: #B9BAC4;
  }
  .styled-bookcard__rating-area{
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
