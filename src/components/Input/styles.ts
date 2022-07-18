import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.base.input};
  border-radius: 4px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.base.text};

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.base.label};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.yellow.dark};
  }
`;

export const OptionalText = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.base.label};
  margin-inline: 0.25rem 0.75rem;
`;
