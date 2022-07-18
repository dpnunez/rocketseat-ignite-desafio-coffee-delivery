import styled from "styled-components";

export const HomeContainer = styled.main`
  padding-inline: 1rem;
  padding-bottom: 3rem;
`;

export const HomeInsideContainer = styled.main`
  max-width: 1120px;
  margin-inline: auto;
`;

export const HomeTitle = styled.h2`
  margin-top: 2rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
  font-weight: 800;
`;

export const CoffeeCards = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2.5rem 2rem;
`;
