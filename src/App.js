import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home/Home";
import CartIcon from "./pages/CartIcon/CartIcon";
import ProductList from "./pages/ProductList/ProductList";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess/CheckoutSuccess";
import { PortfolioText } from './PortfolioStyles';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <PortfolioText>
            Click here to go back to PortFolio!
            <a
              href="https://nenorvalls-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolioLink"
            >
              Portfolio
            </a>
          </PortfolioText>
          <Routes>
            <Route path="/cart" element={<CartIcon />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
