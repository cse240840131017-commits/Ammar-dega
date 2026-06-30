import React from 'react';

const Cart = () => {
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <p>Your cart is empty</p>
      <a href="/products" className="btn btn-primary">Continue Shopping</a>
    </div>
  );
};

export default Cart;
