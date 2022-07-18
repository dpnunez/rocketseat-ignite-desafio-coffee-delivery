import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  padding: 1.25rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Image = styled.img`
  aspect-ratio: 1 / 1;
  width: 7.5rem;
  margin-top: -2.5rem;
  object-fit: contain;
`;

export const Tags = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  font-size: 0.625rem;
  background-color: ${({ theme }) => theme.colors.yellow.light};
  color: ${({ theme }) => theme.colors.yellow.dark};
  border-radius: 100vmax;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
`;

export const Title = styled.strong`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-weight: 700;
  font-size: 1.25rem;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.base.label};
  font-size: 0.875rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-self: flex-end;
  margin-top: 2rem;
  width: 100%;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-right: auto;

  color: ${({ theme }) => theme.colors.base.text};

  > small {
    font-size: 0.875rem;
  }

  > span {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export const AddToCartButton = styled.button`
  aspect-ratio: 1 / 1;
  width: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.purple.dark};

  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple.DEFAULT};
  }
`;
