import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(null);
  const [isModalOpen, setModalOpen] = useState(true);


  function addOrder(product) {
    setOrder(product);
    setModalOpen(!isModalOpen);
  }

  return (
    <OrderContext.Provider value={{ order, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
