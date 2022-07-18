import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const Image = styled.img`
  aspect-ratio: 1 / 1;
  width: 4rem;
  margin-block: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > strong {
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 400;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Price = styled.span`
  margin-left: auto;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.base.text};
`;
