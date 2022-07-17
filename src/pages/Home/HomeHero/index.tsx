import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import heroImage from "../../../assets/hero.png";
import {
  HeroContainer,
  HeroImage,
  HeroItem,
  HeroItemIconContainer,
  HeroItems,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
} from "./styles";

export const HomeHero: React.FC = () => {
  const theme = useTheme();

  return (
    <HeroContainer>
      <HeroSection>
        <HeroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </HeroTitle>

        <HeroSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </HeroSubtitle>

        <HeroItems>
          <HeroItem>
            <HeroItemIconContainer color={theme.colors.yellow.dark}>
              <ShoppingCart
                size={16}
                color={theme.colors.white}
                weight="fill"
              />
            </HeroItemIconContainer>
            Compra simples e segura
          </HeroItem>

          <HeroItem>
            <HeroItemIconContainer color={theme.colors.base.text}>
              <Package size={16} color={theme.colors.white} weight="fill" />
            </HeroItemIconContainer>
            Embalagem mantém o café intacto
          </HeroItem>

          <HeroItem>
            <HeroItemIconContainer color={theme.colors.yellow.DEFAULT}>
              <Timer size={16} color={theme.colors.white} weight="fill" />
            </HeroItemIconContainer>
            Entrega rápida e rastreada
          </HeroItem>

          <HeroItem>
            <HeroItemIconContainer color={theme.colors.purple.DEFAULT}>
              <Coffee size={16} color={theme.colors.white} weight="fill" />
            </HeroItemIconContainer>
            O café chega fresquinho até você
          </HeroItem>
        </HeroItems>
      </HeroSection>

      <HeroImage src={heroImage} alt="Café e copo de café" />
    </HeroContainer>
  );
};
