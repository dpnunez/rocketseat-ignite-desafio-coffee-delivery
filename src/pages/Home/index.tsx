import { CoffeeCard } from "../../components/CoffeeCard";
import { coffees } from "../../data/coffees";
import { HomeHero } from "./HomeHero";
import {
  CoffeeCards,
  HomeContainer,
  HomeInsideContainer,
  HomeTitle,
} from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  title: string;
  description: string;
  price: number;
  image: string;
}

export const Home: React.FC = () => (
  <HomeContainer>
    <HomeInsideContainer>
      <HomeHero />
      <HomeTitle>Nossos cafés</HomeTitle>

      <CoffeeCards>
        {coffees.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeCards>
    </HomeInsideContainer>
  </HomeContainer>
);
