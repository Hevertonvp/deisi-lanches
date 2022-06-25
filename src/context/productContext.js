import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";
import { v4 as uuidv4 } from "uuid";

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
    const ingredients = product.ingredients?.filter(
      (ingredient) => ingredient.isExtra === true
    );
    setExtraIngredients(
      ingredients
        ? ingredients.map((ingredient) => {
            return { ...ingredient, isSelected: false, id: uuidv4() }; // selecting items from the cart list
          })
        : []
    );
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        addProduct,
        extraIngredients,
        setExtraIngredients,
        isModalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
