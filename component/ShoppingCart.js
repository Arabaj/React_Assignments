import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';


function ShoppingCart() {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product]) {
        newCart[product] += 1;
      } else {
        newCart[product] = 1;
      }
      return newCart;
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product] > 1) {
        newCart[product] -= 1;
      } else {
        delete newCart[product];
      }
      return newCart;
    });
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default ShoppingCart;
