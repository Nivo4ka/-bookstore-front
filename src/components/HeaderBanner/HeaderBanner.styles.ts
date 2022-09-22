import styled from 'styled-components';
import books from '../../images/booksLite.svg';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  border-radius: ${(p) => p.theme.borderRadius};
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-color: ${(p) => p.theme.mainTheme.color.light};
  margin-bottom: 120px;
  background-image:url(${books});
  background-size: auto;
  background-position: bottom left;
  
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 108px;
  }

  img {
    position: absolute;
    right: 98px;
    background-repeat: no-repeat;
  }

  h2 {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
  }

  p {
    width: 217px;
    margin-bottom: 50px;
  }

  @media (max-width: 1295px) {
    height: 289px;
    background-size: auto 218px;

    div {
      margin-left: 40px;
    }

    img {
      right: 14px;
      width: auto;
      height: 360px;
    }

    p {
      margin-bottom: 40px;
    }
  }
`;
