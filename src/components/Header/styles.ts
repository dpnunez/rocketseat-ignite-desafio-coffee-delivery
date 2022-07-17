import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem 1rem;
`;

export const InsideHeaderContainer = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const Location = styled.span`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.purple.light};
  color: ${({ theme }) => theme.colors.purple.dark};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
`;

interface CheckoutLinkProps {
  "data-cart-items"?: number;
}

export const CheckoutLink = styled(Link)<CheckoutLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.yellow.light};
  position: relative;

  ${props => {
    if (typeof props["data-cart-items"] !== "undefined") {
      return css`
        &::after {
          content: attr(data-cart-items);
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;

          aspect-ratio: 1 / 1;
          width: 1.25rem;
          border-radius: 50%;

          background-color: ${({ theme }) => theme.colors.yellow.dark};
          color: ${({ theme }) => theme.colors.white};
          font-weight: 700;
          font-size: 0.75rem;
          line-height: 1;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      `;
    }

    return "";
  }}
`;
