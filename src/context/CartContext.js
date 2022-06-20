import { useReducer } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children, reducer, initialState }) {
  const [cartState, cartDispatch] = useReducer(reducer, initialState);
  // const [orders, setOrders] = useState([]);
  // const [selectedIngredients, setSelectedIngredients] = useState([]);
  // const [checkedState, setCheckedState] = useState([]);

  function updateCart(type, payload) {
    cartDispatch({
      type,
      payload,
    });
  }

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
