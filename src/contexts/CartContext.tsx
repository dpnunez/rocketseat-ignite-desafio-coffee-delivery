import { createContext, useCallback, useContext, useMemo } from "react";
import { coffees } from "../data/coffees";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { Coffee } from "../pages/Home";

interface CartItem {
  quantity: number;
  coffeeId: Coffee["id"];
}

interface FullCartItem {
  quantity: number;
  coffee: Coffee;
}

interface CartContextData {
  items: FullCartItem[];
  addItemToCart: (quantity: number, coffeeId: Coffee["id"]) => void;
  removeItemFromCart: (coffeeId: Coffee["id"]) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextData);

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useLocalStorageState<CartItem[]>(
    "@coffee-delivery:cart-0.1.0",
    [],
  );

  const addItemToCart: CartContextData["addItemToCart"] = useCallback(
    (quantity, coffeeId) => {
      // se não existir id
      if (coffees.findIndex(coffee => coffee.id === coffeeId) < 0) {
        throw new Error("ID inexistente");
      }

      setItems(items => {
        const copy = [...items];

        const existingItemIndex = copy.findIndex(
          item => item.coffeeId === coffeeId,
        );

        if (existingItemIndex >= 0) {
          // se item já existir no carrinho, apenas altera a quantidade
          copy[existingItemIndex].quantity = quantity;
        } else {
          // caso contrário adiciona novo item ao carrinho
          copy.push({
            quantity,
            coffeeId,
          });
        }

        return copy;
      });
    },
    [],
  );

  const removeItemFromCart: CartContextData["removeItemFromCart"] = useCallback(
    coffeeId => {
      setItems(items => {
        return items.filter(item => item.coffeeId !== coffeeId);
      });
    },
    [],
  );

  const clearCart: CartContextData["clearCart"] = useCallback(() => {
    setItems([]);
  }, []);

  const fullItems = useMemo((): FullCartItem[] => {
    return (
      items
        // elimina ids inexistentes se tiverem aqui por algum motivo
        .filter(item => coffees.some(coffee => coffee.id === item.coffeeId))
        .map(item => ({
          quantity: item.quantity,
          coffee: coffees.find(coffee => coffee.id === item.coffeeId)!,
        }))
    );
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items: fullItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
