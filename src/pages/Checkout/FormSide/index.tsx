import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useTheme } from "styled-components";
import { CheckoutFormValues, PaymentMethod } from "..";
import { Input } from "../../../components/Input";
import {
  CityInputContainer,
  ComplementInputContainer,
  FormInputs,
  FormSideContainer,
  NeighbourhoodInputContainer,
  NumberInputContainer,
  PaymentMethodButton,
  PaymentMethodButtons,
  Section,
  SectionHeader,
  StateInputContainer,
  StreetInputContainer,
  ZipcodeInputContainer,
} from "./styles";

interface FormSideProps {
  paymentMethod: PaymentMethod | undefined;
  setPaymentMethod: React.Dispatch<
    React.SetStateAction<PaymentMethod | undefined>
  >;
}

export const FormSide: React.FC<FormSideProps> = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  const { colors } = useTheme();
  const { register } = useFormContext<CheckoutFormValues>();

  return (
    <FormSideContainer>
      <h2>Complete seu pedido</h2>

      {/* address section */}
      <Section>
        <SectionHeader>
          <MapPinLine size="22" color={colors.yellow.dark} />

          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </SectionHeader>

        <FormInputs>
          <ZipcodeInputContainer>
            <Input placeholder="CEP" required {...register("zipcode")} />
          </ZipcodeInputContainer>

          <StreetInputContainer>
            <Input placeholder="Rua" required {...register("street")} />
          </StreetInputContainer>

          <NumberInputContainer>
            <Input placeholder="Número" required {...register("number")} />
          </NumberInputContainer>

          <ComplementInputContainer>
            <Input placeholder="Complemento" {...register("complement")} />
          </ComplementInputContainer>

          <NeighbourhoodInputContainer>
            <Input
              placeholder="Bairro"
              required
              {...register("neighbourhood")}
            />
          </NeighbourhoodInputContainer>

          <CityInputContainer>
            <Input placeholder="Cidade" required {...register("city")} />
          </CityInputContainer>

          <StateInputContainer>
            <Input
              placeholder="UF"
              required
              minLength={2}
              maxLength={2}
              {...register("state")}
            />
          </StateInputContainer>
        </FormInputs>
      </Section>

      {/* payment method section */}
      <Section>
        <SectionHeader>
          <CurrencyDollar size="22" color={colors.purple.DEFAULT} />

          <div>
            <h3>Pagamento</h3>

            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </SectionHeader>

        <PaymentMethodButtons>
          <PaymentMethodButton
            type="button"
            icon={CreditCard}
            title="CARTÃO DE CRÉDITO"
            onClick={() => setPaymentMethod("credit")}
            selected={paymentMethod === "credit"}
          />

          <PaymentMethodButton
            type="button"
            icon={Bank}
            title="CARTÃO DE DÉBITO"
            onClick={() => setPaymentMethod("debit")}
            selected={paymentMethod === "debit"}
          />

          <PaymentMethodButton
            type="button"
            icon={Money}
            title="DINHEIRO"
            onClick={() => setPaymentMethod("cash")}
            selected={paymentMethod === "cash"}
          />
        </PaymentMethodButtons>
      </Section>
    </FormSideContainer>
  );
};
