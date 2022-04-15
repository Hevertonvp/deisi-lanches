import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  });


  return (
    <ProductContext.Provider
      value={{ products }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
