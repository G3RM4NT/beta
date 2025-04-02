import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h1>Gym Recommendation</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/recommendations">Recommendations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;