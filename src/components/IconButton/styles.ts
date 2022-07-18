import styled, { css } from "styled-components";

interface IconButtonContainerProps {
  size: "small" | "big";
}

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.base.text};
  font-size: 0.75rem;
  background-color: ${({ theme }) => theme.colors.base.button};
  border-radius: 6px;

  ${({ size }) => {
    if (size === "small") {
      return css`
        padding: 0.5rem;
        gap: 0.25rem;
      `;
    }

    return css`
      padding: 1rem;
      gap: 0.75rem;
    `;
  }}

  transition: 0.2s linear;
  transition-property: color, background-color;

  &:hover {
    color: ${({ theme }) => theme.colors.base.subtitle};
    background-color: ${({ theme }) => theme.colors.base.hover};
  }
`;
