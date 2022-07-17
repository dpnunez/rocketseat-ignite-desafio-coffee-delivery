import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import logo from "../../assets/logo.svg";
import {
  CheckoutLink,
  HeaderContainer,
  InsideHeaderContainer,
  Location,
} from "./styles";

export const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <InsideHeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div>
          <Location>
            <MapPin
              size={22}
              color={theme.colors.purple.DEFAULT}
              weight="fill"
            />
            Porto Alegre, RS
          </Location>

          <CheckoutLink to="/checkout" data-cart-items={3}>
            <ShoppingCart
              size={22}
              color={theme.colors.yellow.dark}
              weight="fill"
            />
          </CheckoutLink>
        </div>
      </InsideHeaderContainer>
    </HeaderContainer>
  );
};
