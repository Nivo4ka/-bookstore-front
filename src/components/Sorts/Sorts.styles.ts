import styled from 'styled-components';

export const StyledSort = styled.div`
  padding: 10px;
  background-color: #F0F4EF;
  border-radius: 16px;
  
  p {
    font-size: 16px;
    line-height: 28px;
    display: inline-block;
    margin: 5px 78px 5px 5px;
    white-space: nowrap;
    cursor: default;
  }

  .styled-sort {
    &__p {
      cursor: pointer;
  
      &_disabled {
        color: #B9BAC3;
      }
    }
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      margin: 0 5px;
    }
  }
`;
