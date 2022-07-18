import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "../src/styles/global-styles";
import { ThemeProvider } from "styled-components";
import DemoCarousel from "./components/carousel/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Cardapio from "./components/cardapio/Cardapio";
import OrderModal from "./components/orderModal/OrderModal";
import { ProductProvider } from "./context/productContext.js";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import { cartReducer, initialState } from "./context/reducers/cartReducer";
import {theme} from './styles/theme'

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ProductProvider>
          <CartProvider initialState={initialState} reducer={cartReducer}>
            <OrderModal />
            <NavBar />
            <Routes>
              <Route exact path="/" element={<DemoCarousel />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/cardapio" element={<Cardapio />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
