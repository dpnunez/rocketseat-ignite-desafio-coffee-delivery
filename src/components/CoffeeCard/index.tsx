import { ShoppingCart } from "phosphor-react";
import { useRef } from "react";
import { useTheme } from "styled-components";
import { useCartContext } from "../../contexts/CartContext";
import { Coffee } from "../../pages/Home";
import { CoffeeQuantity, CoffeeQuantityRef } from "../CoffeeQuantity";
import {
  AddToCartButton,
  CoffeeCardContainer,
  Description,
  Footer,
  Image,
  Price,
  Tag,
  Tags,
  Title,
} from "./styles";

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const theme = useTheme();
  const { addItemToCart } = useCartContext();
  const coffeeQuantityRef = useRef<CoffeeQuantityRef>(null);

  function handleAddToCart() {
    addItemToCart(coffeeQuantityRef.current?.quantity ?? 1, coffee.id);
  }

  return (
    <CoffeeCardContainer>
      <Image src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Footer>
        <Price>
          <small>R$</small>

          <span>
            {coffee.price.toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </span>
        </Price>

        <CoffeeQuantity ref={coffeeQuantityRef} />

        <AddToCartButton type="button" onClick={handleAddToCart}>
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
