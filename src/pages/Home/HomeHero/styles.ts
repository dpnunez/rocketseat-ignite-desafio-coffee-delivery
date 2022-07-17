import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin-inline: auto;
  gap: 3.5rem;
  height: 544px;
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeroTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.base.title};
  font-weight: 800;
`;

export const HeroSubtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.base.subtitle};
`;

export const HeroItems = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`;

export const HeroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
`;

interface HeroItemIconContainerProps {
  color: string;
}

export const HeroItemIconContainer = styled.div<HeroItemIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1 / 1;
  width: 2rem;
  border-radius: 50%;

  background-color: ${({ color }) => color};
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 476px;
  object-fit: cover;
`;
