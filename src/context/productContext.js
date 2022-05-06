import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [extraIngredients, setExtraIngredients] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  function addProduct(product) {
    setProduct(product);
    setModalOpen(!isModalOpen);
    setExtraIngredients(
      product.ingredients.filter((ingredient) => ingredient.isExtra === true)
    );
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        addProduct,
        extraIngredients,
        isModalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
