import { createContext, useState } from "react";

export const CartContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);
 const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  return (
    <CartContext.Provider
      value={{ setOrder, order, checkedState, setCheckedState, selectedIngredients, setSelectedIngredients}}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
