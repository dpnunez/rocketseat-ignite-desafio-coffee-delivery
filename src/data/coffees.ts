import arabeImage from "../assets/arabe.png";
import cafeComLeiteImage from "../assets/cafe-com-leite.png";
import capuccinoImage from "../assets/capuccino.png";
import chocolateQuenteImage from "../assets/chocolate-quente.png";
import cubanoImage from "../assets/cubano.png";
import expressoAmericanoImage from "../assets/expresso-americano.png";
import expressoCremosoImage from "../assets/expresso-cremoso.png";
import expressoGeladoImage from "../assets/expresso-gelado.png";
import expressoTradicionalImage from "../assets/expresso-tradicional.png";
import havaianoImage from "../assets/havaiano.png";
import irlandesImage from "../assets/irlandes.png";
import latteImage from "../assets/latte.png";
import macchiatoImage from "../assets/macchiato.png";
import mocaccinoImage from "../assets/mocaccino.png";
import { Coffee } from "../pages/Home";

export const coffees: Coffee[] = [
  {
    id: 1,
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: expressoTradicionalImage,
  },
  {
    id: 2,
    tags: ["tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: expressoAmericanoImage,
  },
  {
    id: 3,
    tags: ["tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: expressoCremosoImage,
  },
  {
    id: 4,
    tags: ["tradicional", "gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: expressoGeladoImage,
  },
  {
    id: 5,
    tags: ["tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: cafeComLeiteImage,
  },
  {
    id: 6,
    tags: ["tradicional", "com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: latteImage,
  },
  {
    id: 7,
    tags: ["tradicional", "com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: capuccinoImage,
  },
  {
    id: 8,
    tags: ["tradicional", "com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    image: macchiatoImage,
  },
  {
    id: 9,
    tags: ["tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: mocaccinoImage,
  },
  {
    id: 10,
    tags: ["especial", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: chocolateQuenteImage,
  },
  {
    id: 11,
    tags: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: cubanoImage,
  },
  {
    id: 12,
    tags: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: havaianoImage,
  },
  {
    id: 13,
    tags: ["especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: arabeImage,
  },
  {
    id: 14,
    tags: ["especial", "alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: irlandesImage,
  },
];
