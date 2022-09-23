import styled from 'styled-components';

export default styled.div`
  padding: 10px;
  background-color: ${(p) => p.theme.mainTheme.color.light};
  border-radius: ${(p) => p.theme.borderRadius};
  
  p {
    font-size: ${(p) => p.theme.font.sizePMiddle};
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
        color: ${(p) => p.theme.mainTheme.color.darkGrey};
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

  @media (max-width: 700px) {
    p {
      margin-right: 50px;
    }
  }

  @media (max-width: 450px) {
    width: 100%;
    p {
      margin-right: 0;
    }
  }
`;
