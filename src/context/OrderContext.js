import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);

  return (
    <OrderContext.Provider value={{ setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
