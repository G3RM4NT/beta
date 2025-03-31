import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Recommendations from './pages/Recommendations';

function App() {
  const [cart, setCart] = useState([]);
  const userId = "64f8e4b5a1b2c3d4e5f6g7h9"; // ID del usuario (puedes obtenerlo dinámicamente)

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/recommendations" element={<Recommendations userId={userId} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;