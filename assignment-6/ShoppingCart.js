
import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setCart([...cart, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
