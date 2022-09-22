import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .styled-bookcard__title {
    margin: 30px 0 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .styled-bookcard__autor {
    color: ${(p) => p.theme.mainTheme.color.darkGrey};
  }
  
  .styled-bookcard__rating-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;

    &__star {
      stroke: ${(p) => p.theme.mainTheme.color.green};
      margin-right: 25px;
    }

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    li {
      display: inline;
      svg{
        stroke: ${(p) => p.theme.mainTheme.color.green};
        fill: ${(p) => p.theme.mainTheme.color.green};
      }
    }

    p {
      font-size: 16px;
      line-height: 24px;
      color: ${(p) => p.theme.mainTheme.color.darkGrey};
      margin: 0 7px 0 0;
    }
  }
`;
