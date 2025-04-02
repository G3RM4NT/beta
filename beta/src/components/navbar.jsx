import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductCard;