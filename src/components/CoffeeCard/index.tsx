import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { useTheme } from "styled-components";
import coffeeImage from "../../assets/expresso-tradicional.png";
import {
  AddToCartButton,
  Amount,
  AmountButton,
  AmountInput,
  CoffeeCardContainer,
  Description,
  Footer,
  Image,
  Price,
  Tag,
  Tags,
  Title,
} from "./styles";

interface CoffeeCardProps {}

export const CoffeeCard: React.FC<CoffeeCardProps> = () => {
  const theme = useTheme();
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
    <CoffeeCardContainer>
      <Image src={coffeeImage} alt="Expresso Tradicional" />

      <Tags>
        <Tag>Tradicional</Tag>
      </Tags>

      <Title>Expresso Tradicional</Title>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <Footer>
        <Price>
          <small>R$</small>
          <span>9,90</span>
        </Price>

        <Amount>
          <AmountButton onClick={decrementAmount} disabled={amount <= 1}>
            <Minus size={14} />
          </AmountButton>

          <AmountInput
            type="text"
            inputMode="numeric"
            value={isNaN(amount) ? "" : amount}
            onChange={e => setAmount(parseInt(e.target.value))}
          />

          <AmountButton onClick={incrementAmount}>
            <Plus size={14} />
          </AmountButton>
        </Amount>

        <AddToCartButton>
          <ShoppingCart
            size={22}
            color={theme.colors.base.card}
            weight="fill"
          />
        </AddToCartButton>
      </Footer>
    </CoffeeCardContainer>
  );
};
