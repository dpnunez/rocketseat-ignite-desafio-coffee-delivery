import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { FormEvent, useState } from "react";
import { useTheme } from "styled-components";
import expressoTradicionalImage from "../../assets/expresso-tradicional.png";
import latteImage from "../../assets/latte.png";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";
import { Input } from "../../components/Input";
import {
  Cart,
  CartItems,
  CartSide,
  CheckoutContainer,
  Form,
  FormInputs,
  FormSide,
  PaymentMethodButton,
  PaymentMethodButtons,
  Section,
  SectionHeader,
  Summary,
  SummaryLine,
} from "./styles";

export const Checkout: React.FC = () => {
  const { colors } = useTheme();
  const [paymentMethod, setPaymentMethod] = useState<
    "credit" | "debit" | "cash"
  >();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <CheckoutContainer>
      <Form onSubmit={handleSubmit}>
        <FormSide>
          <h2>Complete seu pedido</h2>

          <Section>
            <SectionHeader>
              <MapPinLine size="22" color={colors.yellow.dark} />

              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </SectionHeader>

            <FormInputs>
              <div style={{ gridColumn: "span 3" }}>
                <Input type="text" placeholder="CEP" required />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <Input type="text" placeholder="Rua" required />
              </div>

              <div style={{ gridColumn: "span 3" }}>
                <Input type="text" placeholder="Número" required />
              </div>

              <div style={{ gridColumn: "4 / -1" }}>
                <Input type="text" placeholder="Complemento" />
              </div>

              <div style={{ gridColumn: "span 3" }}>
                <Input type="text" placeholder="Bairro" required />
              </div>

              <div style={{ gridColumn: "span 5" }}>
                <Input type="text" placeholder="Cidade" required />
              </div>

              <Input type="text" placeholder="UF" required />
            </FormInputs>
          </Section>

          <Section>
            <SectionHeader>
              <CurrencyDollar size="22" color={colors.purple.DEFAULT} />

              <div>
                <h3>Pagamento</h3>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
        </FormSide>

        <CartSide>
          <h2>Cafés selecionados</h2>

          <Cart>
            <CartItems>
              <CartItem
                coffee={{
                  title: "Expresso Tradicional",
                  price: 9.9,
                  image: expressoTradicionalImage,
                }}
              />

              <CartItem
                coffee={{
                  title: "Latte",
                  price: 19.8,
                  image: latteImage,
                }}
              />
            </CartItems>

            <Summary>
              <SummaryLine>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </SummaryLine>

              <SummaryLine>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </SummaryLine>

              <SummaryLine highlight>
                <span>Total</span>
                <span>R$ 33,20</span>
              </SummaryLine>
            </Summary>

            <Button type="submit" title="CONFIRMAR PEDIDO" />
          </Cart>
        </CartSide>
      </Form>
    </CheckoutContainer>
  );
};
