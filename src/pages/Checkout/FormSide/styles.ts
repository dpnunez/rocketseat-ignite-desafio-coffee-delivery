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
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  grid-template-columns: repeat(9, minmax(0, 1fr));
`;

export const PaymentMethodButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
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
