import { Minus, Plus } from "phosphor-react";
import { forwardRef, useImperativeHandle, useState } from "react";
import {
  CoffeeQuantityContainer,
  QuantityButton,
  QuantityInput,
} from "./styles";

export interface CoffeeQuantityRef {
  quantity: number;
}

interface CoffeeQuantityProps {
  initialQuantity?: number;
  onIncrement?: (quantity: number) => void;
  onDecrement?: (quantity: number) => void;
}

export const CoffeeQuantity = forwardRef<
  CoffeeQuantityRef,
  CoffeeQuantityProps
>(({ initialQuantity = 1, onIncrement, onDecrement }, ref) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useImperativeHandle(ref, () => ({ quantity }), [quantity]);

  function incrementAmount() {
    setQuantity(amount => {
      let newAmount = 1;

      if (!isNaN(amount)) {
        newAmount = amount + 1;
      }

      onIncrement?.(newAmount);
      return newAmount;
    });
  }

  function decrementAmount() {
    setQuantity(amount => {
      let newAmount = 1;

      if (!isNaN(amount)) {
        newAmount = amount - 1;
      }

      onDecrement?.(newAmount);
      return newAmount;
    });
  }

  return (
    <CoffeeQuantityContainer>
      <QuantityButton
        type="button"
        onClick={decrementAmount}
        disabled={quantity <= 1}
      >
        <Minus size={14} />
      </QuantityButton>

      <QuantityInput
        type="text"
        inputMode="numeric"
        value={isNaN(quantity) ? "" : quantity}
        onChange={e => setQuantity(parseInt(e.target.value))}
      />

      <QuantityButton type="button" onClick={incrementAmount}>
        <Plus size={14} />
      </QuantityButton>
    </CoffeeQuantityContainer>
  );
});
