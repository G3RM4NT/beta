import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.jsx';

const Recommendations = ({ userId, addToCart }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}/recommendations`);
        setRecommendations(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener recomendaciones:', error);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId]);

  if (loading) {
    return <div>Cargando recomendaciones...</div>;
  }

  return (
    <div className="recommendations">
      <h1>Recomendaciones para ti</h1>
      <div className="product-list">
        {recommendations.map(product => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;