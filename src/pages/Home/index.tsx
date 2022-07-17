import { CoffeeCard } from "../../components/CoffeeCard";
import { HomeHero } from "./HomeHero";
import {
  CoffeeCards,
  HomeContainer,
  HomeInsideContainer,
  HomeTitle,
} from "./styles";

export const Home: React.FC = () => (
  <HomeContainer>
    <HomeInsideContainer>
      <HomeHero />
      <HomeTitle>Nossos cafés</HomeTitle>

      <CoffeeCards>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeCards>
    </HomeInsideContainer>
  </HomeContainer>
);
