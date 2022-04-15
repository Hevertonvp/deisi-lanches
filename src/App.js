import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "../src/styles/Global";
import { ThemeProvider } from "styled-components";
import DemoCarousel from "./components/carousel/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Cardapio from "./components/cardapio/Cardapio";
import OrderModal from "./components/orderModal/OrderModal";
import { ProductProvider } from "./context/ProductContext";
import { OrderProvider } from "./context/OrderContext";
import { useState } from "react";

function App() {
  const theme = {
    colors: {
      body: "#99b86a",
    },
    fonts: {
      navLink: "'Oleo Script', cursive",
      colors: {},
    },
  };

 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ProductProvider>
          <OrderProvider>
            <OrderModal/>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<DemoCarousel />} />
              <Route
                exact
                path="/products"
                element={
                  <Products

                  />
                }
              />
              <Route exact path="/cardapio" element={<Cardapio />} />
            </Routes>
          </OrderProvider>
        </ProductProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
