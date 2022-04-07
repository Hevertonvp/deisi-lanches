import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "../src/styles/Global";
import { ThemeProvider } from "styled-components";
import DemoCarousel from "./components/carousel/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Cardapio from "./components/cardapio/Cardapio";
import ProductModal from "./components/product/ProductModal";
import { products } from "../src/data/mockProducts";
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

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <ProductModal
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleModal}
          products={products}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<DemoCarousel />} />
          <Route
            exact
            path="/products"
            element={
              <Products
                modalIsOpen={modalIsOpen}
                handleOpenModal={handleModal}
                products={products}
              />
            }
          />
          <Route exact path="/cardapio" element={<Cardapio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
