import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Fragment, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import * as zod from "zod";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";
import { Input } from "../../components/Input";
import { useCartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import {
  BackLink,
  Cart,
  CartItems,
  CartItemSeparator,
  CartSide,
  CheckoutContainer,
  Form,
  FormInputs,
  FormSide,
  NoItemsInCart,
  PaymentMethodButton,
  PaymentMethodButtons,
  Section,
  SectionHeader,
  Summary,
  SummaryLine,
} from "./styles";

const deliveryFee = 3.5;

const checkoutFormValidationSchema = zod.object({
  zipcode: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  neighbourhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
});

type CheckoutFormValues = zod.infer<typeof checkoutFormValidationSchema>;

type PaymentMethod = "credit" | "debit" | "cash";

export interface SuccessPageLocationState {
  address: CheckoutFormValues;
  paymentMethod: PaymentMethod;
}

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartContext();
  const { colors } = useTheme();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();
  const { register, handleSubmit } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormValidationSchema),
  });

  const itemsTotal = useMemo((): number => {
    return items.reduce(
      (total, item) => total + item.coffee.price * item.quantity,
      0,
    );
  }, [items]);

  function handleCheckout(values: CheckoutFormValues) {
    if (!items.length) {
      return alert("É necessário selecionar itens para finalizar pedido");
    }

    if (!paymentMethod) {
      return alert("É necessário selecionar um método de pagamento");
    }

    clearCart();
    navigate("/success", {
      state: {
        address: values,
        paymentMethod,
      },
    });
  }

  return (
    <CheckoutContainer>
      <Form onSubmit={handleSubmit(handleCheckout)}>
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
                <Input
                  type="text"
                  placeholder="CEP"
                  required
                  {...register("zipcode")}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <Input
                  type="text"
                  placeholder="Rua"
                  required
                  {...register("street")}
                />
              </div>

              <div style={{ gridColumn: "span 3" }}>
                <Input
                  type="text"
                  placeholder="Número"
                  required
                  {...register("number")}
                />
              </div>

              <div style={{ gridColumn: "4 / -1" }}>
                <Input
                  type="text"
                  placeholder="Complemento"
                  {...register("complement")}
                />
              </div>

              <div style={{ gridColumn: "span 3" }}>
                <Input
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register("neighbourhood")}
                />
              </div>

              <div style={{ gridColumn: "span 5" }}>
                <Input
                  type="text"
                  placeholder="Cidade"
                  required
                  {...register("city")}
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="UF"
                  required
                  {...register("state")}
                />
              </div>
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
            {items.length > 0 ? (
              <Fragment>
                <CartItems>
                  {items.map(item => (
                    <Fragment key={item.coffee.id}>
                      <CartItem quantity={item.quantity} coffee={item.coffee} />
                      <CartItemSeparator />
                    </Fragment>
                  ))}
                </CartItems>

                <Summary>
                  <SummaryLine>
                    <span>Total de itens</span>
                    <span>{formatPrice(itemsTotal)}</span>
                  </SummaryLine>

                  <SummaryLine>
                    <span>Entrega</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </SummaryLine>

                  <SummaryLine highlight>
                    <span>Total</span>
                    <span>{formatPrice(itemsTotal + deliveryFee)}</span>
                  </SummaryLine>
                </Summary>

                <Button type="submit" title="CONFIRMAR PEDIDO" />
              </Fragment>
            ) : (
              <NoItemsInCart>
                Seu carrinho está vazio 😭
                <br />
                Clique <BackLink to="/">aqui</BackLink> para voltar à loja
              </NoItemsInCart>
            )}
          </Cart>
        </CartSide>
      </Form>
    </CheckoutContainer>
  );
};
