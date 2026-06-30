import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>Shoe Store</Link>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
          <li><Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link></li>
          <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
          <li><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
