import { Trash } from "phosphor-react";
import { Coffee } from "../../pages/Home";
import { formatPrice } from "../../utils/formatPrice";
import { CoffeeAmount } from "../CoffeeAmount";
import { IconButton } from "../IconButton";
import { CartItemContainer, Content, Image, Price } from "./styles";

interface CartItemProps {
  quantity: number;
  coffee: Coffee;
}

export const CartItem: React.FC<CartItemProps> = ({ quantity, coffee }) => (
  <CartItemContainer>
    <Image src={coffee.image} alt={coffee.title} />

    <Content>
      <strong>{coffee.title}</strong>

      <div>
        <CoffeeAmount quantity={quantity} />
        <IconButton type="button" icon={Trash} title="REMOVER" size="small" />
      </div>
    </Content>

    <Price>{formatPrice(coffee.price * quantity)}</Price>
  </CartItemContainer>
);
