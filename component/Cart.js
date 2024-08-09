import React from 'react';

function Cart({ cart, removeFromCart }) {
  const cartItems = Object.keys(cart).map((product) => (
    <li key={product}>
      {product} (x{cart[product]})
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </li>
  ));

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length > 0 ? cartItems : <p>Cart is empty</p>}
      </ul>
    </div>
  );
}

export default Cart;
