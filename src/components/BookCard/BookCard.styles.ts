import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
  max-width: 305px;

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
    }
  }
  @media (max-width: 1320px) {
    max-width: 254px;
    .styled-bookcard__rating-area {
      &__star {
        width: 21px;
        height: 21px;
        margin-right: 18px;
      }
    }
  }

  @media (max-width: 840px) {
    max-width: 195px;
    .styled-bookcard__rating-area {
      &__star {
        width: 15px;
        height: 15px;
        margin-right: 7px;
      }
    }
  }

  @media (max-width: 630px) {
    max-width: 135px;
  }
`;
