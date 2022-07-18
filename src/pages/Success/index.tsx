import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import successIllustration from "../../assets/success-illustration.png";
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
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
