import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { AmountButton, AmountInput, CoffeeAmountContainer } from "./styles";

interface CoffeeAmountProps {}

export const CoffeeAmount: React.FC<CoffeeAmountProps> = () => {
  const [amount, setAmount] = useState(1);

  function incrementAmount() {
    setAmount(amount => {
      if (isNaN(amount)) {
        return 1;
      }

      return amount + 1;
    });
  }

  function decrementAmount() {
    setAmount(amount => {
      if (isNaN(amount)) {
        return 1;
      }

      return amount - 1;
    });
  }

  return (
    <CoffeeAmountContainer>
      <AmountButton
        type="button"
        onClick={decrementAmount}
        disabled={amount <= 1}
      >
        <Minus size={14} />
      </AmountButton>

      <AmountInput
        type="text"
        inputMode="numeric"
        value={isNaN(amount) ? "" : amount}
        onChange={e => setAmount(parseInt(e.target.value))}
      />

      <AmountButton type="button" onClick={incrementAmount}>
        <Plus size={14} />
      </AmountButton>
    </CoffeeAmountContainer>
  );
};
