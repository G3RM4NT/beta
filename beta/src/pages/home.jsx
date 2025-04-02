import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.jsx';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Obtener productos desde el backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h1>Productos</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;