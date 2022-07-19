import styled, { css } from "styled-components";
import { IconButton } from "../../../components/IconButton";

export const FormSideContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > h2 {
    margin-bottom: 0.1875rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 700;
    font-size: 1.125rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;

export const Section = styled.section`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.base.card};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 2.5rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    > h3 {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.base.subtitle};
      font-weight: 400;
    }

    > p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.base.text};
      font-weight: 400;
    }
  }
`;

export const FormInputs = styled.div`
  display: grid;
  gap: 1rem 0.75rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: 0.75rem 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 1rem 0.75rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 0.75rem 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    gap: 1rem 0.75rem;
  }
`;

export const ZipcodeInputContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-column: span 3;
  }
`;

export const StreetInputContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-column: 1 / -1;
  }
`;

export const NumberInputContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-column: span 3;
  }
`;

export const ComplementInputContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-column: 4 / -1;
  }
`;

export const NeighbourhoodInputContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-column: span 3;
  }
`;

export const CityInputContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-column: span 4;
  }

  @media (min-width: 1120px) {
    grid-column: span 5;
  }
`;

export const StateInputContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-column: span 2;
  }

  @media (min-width: 1120px) {
    grid-column: span 1;
  }
`;

export const PaymentMethodButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.75rem;

  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

interface PaymentMethodButtonProps {
  selected?: boolean;
}

export const PaymentMethodButton = styled(IconButton)<PaymentMethodButtonProps>`
  ${({ selected, theme }) => {
    if (selected) {
      return css`
        background-color: ${theme.colors.purple.light} !important;
        outline: 1px solid ${theme.colors.purple.DEFAULT};
      `;
    }

    return "";
  }}
`;
