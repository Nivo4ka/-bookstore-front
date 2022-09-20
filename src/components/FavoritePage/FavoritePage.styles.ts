import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 40px;
  margin: auto 0;

  /* >div:last-child .styled-favoritepage__splitter {
    display: none;
  } */

  >div:not(:last-child) {
    padding-bottom: 30px;
    border-bottom: 1px solid #D6D8E7;
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
`;
