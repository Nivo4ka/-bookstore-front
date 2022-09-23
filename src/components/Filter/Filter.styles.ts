import styled from 'styled-components';

export default styled.div`
  width: 100%;
  transition: 200ms ease all;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;

  .styled-filter__filter-area {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 840px) {
    flex-wrap: wrap;
    .styled-filter__filter-area {
      margin-top: 20px;
      width: 100%;
      order: 1;
      justify-content: space-between;
      column-gap: 20px;
      >div>.styled-drop-down-list__name {
        margin: 0;
      }
      
    }
  }

  @media (max-width: 500px) {
    .styled-filter__filter-area {
      flex-direction: column;
      width: 100%;
      
    }
  }
`;
