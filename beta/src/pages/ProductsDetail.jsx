import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetail;