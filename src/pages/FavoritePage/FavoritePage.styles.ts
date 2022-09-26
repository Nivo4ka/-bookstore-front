import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 40px;
  margin: auto 0;

  >div:not(:last-child) {
    padding-bottom: 30px;
    border-bottom: 1px solid ${(p) => p.theme.mainTheme.color.lightGrey};
  }

  .styled-favoritepage__no-books {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    padding: auto;
    align-items: center;

    &_text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        max-width: 465px;
      }

    }

    &_button {
      width: fit-content;
    }

  }

  @media (max-width: 670px) {
    .styled-favoritepage__no-books {
      flex-direction: column-reverse;
      width: 100%;
      max-width: 670px;

      &_text {
        width: 100%;
        height: max-content;
        margin-left: 0;
        button {
          margin-bottom: 20px;
        }

        p {
          margin: 15px 0 15px;
        }
      }
      svg {
        max-width: 450px;
        width: 100%;
        height: auto;
      }
    }
  }
  
  @media (max-width: 390px) {
    .styled-favoritepage__no-books_text {
      button {
          width: 100%;
        }
    }
  }
`;
