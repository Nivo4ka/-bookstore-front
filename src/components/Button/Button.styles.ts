import styled from 'styled-components';

export default styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  background: #344966;
  border-radius: 16px;
  color: #F0F4EF;
  border: none;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.75px;
  transition: all 0.05s ease;

  :hover {
    background: #0D1821;
    cursor: pointer;
  }
  :active {
    outline: 8px solid #d6d8e799;
  }
  :focus {
    outline: 8px solid #d6d8e799;
  }
`;
