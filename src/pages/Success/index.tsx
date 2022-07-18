import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import successIllustration from "../../assets/success-illustration.png";
import { SuccessPageLocationState } from "../Checkout";
import {
  Content,
  DeliveryDetails,
  DeliveryDetailsIcon,
  Image,
  SubTitle,
  SuccessContainer,
  SuccessInsideContainer,
  Title,
} from "./styles";

export const Success: React.FC = () => {
  const { colors } = useTheme();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state]);

  if (!state) {
    return null;
  }

  const { address, paymentMethod } = state as SuccessPageLocationState;

  return (
    <SuccessContainer>
      <SuccessInsideContainer>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>

        <Content>
          <DeliveryDetails>
            <div>
              <DeliveryDetailsIcon color={colors.purple.DEFAULT}>
                <MapPin size={16} weight="fill" />
              </DeliveryDetailsIcon>

              <p>
                Entrega em{" "}
                <strong>
                  {address.street}, {address.number}
                </strong>
                <br />
                {address.neighbourhood} - {address.city}, {address.state}
              </p>
            </div>

            <div>
              <DeliveryDetailsIcon color={colors.yellow.DEFAULT}>
                <Timer size={16} weight="fill" />
              </DeliveryDetailsIcon>

              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </div>

            <div>
              <DeliveryDetailsIcon color={colors.yellow.dark}>
                <CurrencyDollar size={16} weight="fill" />
              </DeliveryDetailsIcon>

              <p>
                Pagamento na entrega
                <br />
                <strong>
                  {paymentMethod === "credit" && "Cartão de Crédito"}
                  {paymentMethod === "debit" && "Cartão de Débito"}
                  {paymentMethod === "cash" && "Dinheiro"}
                </strong>
              </p>
            </div>
          </DeliveryDetails>

          <Image
            src={successIllustration}
            alt="Homem com moto indo entregar o café"
          />
        </Content>
      </SuccessInsideContainer>
    </SuccessContainer>
  );
};
