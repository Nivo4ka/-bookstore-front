import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .styled-catalog__grid {
    width: 100%;
    max-width: 1280px;
    justify-content: space-between;
    /* display: flex;
    flex-wrap: wrap;
    column-count: auto;
    column-gap: minmax(1px, 20px); */
    display: grid;
    grid-template-columns: repeat(4, auto); 
    /* column-gap: 20px; */
    /* grid-column-gap: 20px; */
    grid-row-gap: 60px;
  }

  :last-child {
    width: auto;
  }

  @media (max-width: 1070px) {
    .styled-catalog__grid {
      grid-template-columns: repeat(3, auto);
      grid-row-gap: 30px;
    }
  }

  @media (max-width: 430px) {
    .styled-catalog__grid {
      grid-template-columns: repeat(2, auto);
    }
  }

`;
