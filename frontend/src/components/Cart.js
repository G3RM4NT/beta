import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product._id}>
                <img src={product.image} alt={product.name} style={{ width: '50px' }} />
                <h2>{product.name}</h2>
                <p>Precio: ${product.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(product._id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <Link to="/checkout">
            <button>Proceder a la Compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;