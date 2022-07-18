import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { Coffee } from "../../pages/Home";
import { CoffeeAmount } from "../CoffeeAmount";
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
          <span>{coffee.price}</span>
        </Price>

        <CoffeeAmount />

        <AddToCartButton type="button">
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
