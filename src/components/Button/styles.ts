import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.yellow.DEFAULT};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;

  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow.dark};
  }
`;
