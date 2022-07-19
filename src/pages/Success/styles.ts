import styled from "styled-components";

export const SuccessContainer = styled.main`
  padding-inline: 1rem;
  padding-bottom: 3rem;
`;

export const SuccessInsideContainer = styled.div`
  max-width: 1120px;
  margin-inline: auto;
  margin-top: 5rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.yellow.dark};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.lg} {
    text-align: left;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.lg} {
    text-align: left;
  }
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const DeliveryDetails = styled.div`
  width: min(100%, 526px);
  border-radius: 6px 36px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* truque para border com gradient */
  border: 1px solid transparent;
  background: linear-gradient(
        ${({ theme }) => theme.colors.background},
        ${({ theme }) => theme.colors.background}
      )
      padding-box,
    linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.yellow.DEFAULT},
        ${({ theme }) => theme.colors.purple.DEFAULT}
      )
      border-box;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    strong {
      font-weight: 700;
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 2.5rem;
  }
`;

interface DeliveryDetailsIconProps {
  color: string;
}

export const DeliveryDetailsIcon = styled.div<DeliveryDetailsIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 2rem;
  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color }) => color};
`;

export const Image = styled.img`
  width: min(100%, 492px);
  object-fit: contain;
`;
