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
`;

export const SubTitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const Content = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
`;

export const DeliveryDetails = styled.div`
  width: min(100%, 526px);
  border-radius: 6px 36px;
  padding: 2.5rem;

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

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color }) => color};
`;

export const Image = styled.img`
  width: min(100%, 492px);
  object-fit: contain;
`;
