import styled from "styled-components";

export const CoffeeAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.base.button};
  border-radius: 6px;
`;

export const AmountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.purple.DEFAULT};

  transition: color 0.2s linear;

  &:disabled {
    cursor: not-allowed;
  }

  &:enabled:hover {
    color: ${({ theme }) => theme.colors.purple.dark};
  }
`;

export const AmountInput = styled.input`
  width: 2ch;
  text-align: center;
  color: ${({ theme }) => theme.colors.base.title};
`;
