import styled from 'styled-components';

export default styled.div`
  width: 100%;

  .styled-cartpage__buttom-area {
    display: flex;
    flex-direction: row;
    >button:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
