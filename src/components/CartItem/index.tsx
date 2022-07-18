import { Trash } from "phosphor-react";
import { Coffee } from "../../pages/Home";
import { formatPrice } from "../../utils/formatPrice";
import { CoffeeAmount } from "../CoffeeAmount";
import { IconButton } from "../IconButton";
import { CartItemContainer, Content, Image, Price } from "./styles";

interface CartItemProps {
  coffee: Pick<Coffee, "title" | "image"> & {
    price: number;
  };
}

export const CartItem: React.FC<CartItemProps> = ({ coffee }) => (
  <CartItemContainer>
    <Image src={coffee.image} alt={coffee.title} />

    <Content>
      <strong>{coffee.title}</strong>

      <div>
        <CoffeeAmount />
        <IconButton type="button" icon={Trash} title="REMOVER" size="small" />
      </div>
    </Content>

    <Price>{formatPrice(coffee.price)}</Price>
  </CartItemContainer>
);
