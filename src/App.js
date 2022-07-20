import React, { useState, useEffect } from "react";
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
import { ToggleButton } from "./components/darkModeBtnToggler/Toggle";
import { cartReducer, initialState } from "./context/reducers/cartReducer";
import { lightTheme, darkTheme } from "./styles/theme"


function App() {

  const [theme, setTheme] = useState('light');
  
  const toogleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')    // add a custom hook for this!
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToggleButton themeToggler={toogleTheme}>Switch Theme</ToggleButton>
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
