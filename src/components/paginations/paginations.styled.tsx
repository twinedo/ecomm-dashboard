import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button<{ isCurrent?: boolean }>`
  margin: 0 5px;
  font-weight: ${props => (props.isCurrent ? 'bold' : 'normal')};
  background: none;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;