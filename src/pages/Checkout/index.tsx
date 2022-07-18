import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { useCartContext } from "../../contexts/CartContext";
import { CartSide } from "./CartSide";
import { FormSide } from "./FormSide";
import { CheckoutContainer, Form } from "./styles";

const checkoutFormValidationSchema = zod.object({
  zipcode: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().optional(),
  neighbourhood: zod.string(),
  city: zod.string(),
  state: zod.string().min(2).max(2),
});

export type CheckoutFormValues = zod.infer<typeof checkoutFormValidationSchema>;
export type PaymentMethod = "credit" | "debit" | "cash";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();
  const checkoutForm = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormValidationSchema),
  });

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
      <Form onSubmit={checkoutForm.handleSubmit(handleCheckout)}>
        <FormProvider {...checkoutForm}>
          <FormSide
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </FormProvider>

        <CartSide />
      </Form>
    </CheckoutContainer>
  );
};
