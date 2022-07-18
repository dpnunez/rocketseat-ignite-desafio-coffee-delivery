import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const CartSideContainer = styled.section`
  width: 448px;

  > h2 {
    margin-bottom: 0.9375rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-size: 1.125rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;

export const Cart = styled.div`
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 44px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartItemSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.base.button};
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  color: ${({ theme }) => theme.colors.base.text};
`;

interface SummaryLineProps {
  highlight?: boolean;
}

export const SummaryLine = styled.div<SummaryLineProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ highlight }) => {
    if (highlight) {
      return css`
        color: ${({ theme }) => theme.colors.base.subtitle};
        font-weight: 700;
        font-size: 1.25rem;
      `;
    }

    return css`
      > span:first-of-type {
        font-size: 0.875rem;
      }
    `;
  }}
`;

export const NoItemsInCart = styled.p`
  text-align: center;
  font-weight: 700;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.purple.DEFAULT};

  transition: color 0.2s linear;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.purple.dark};
  }
`;
