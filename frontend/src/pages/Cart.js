import React from 'react';
import CartComponent from '../components/Cart';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <CartComponent cart={cart} removeFromCart={removeFromCart} />
      <button onClick={() => alert('Proceder a la compra')}>Proceder a la Compra</button>
    </div>
  );
};

export default Cart;