import styled from "styled-components";

export const CheckoutContainer = styled.main`
  padding-inline: 1rem;
  padding-bottom: 3rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 1120px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: row;
  }
`;
