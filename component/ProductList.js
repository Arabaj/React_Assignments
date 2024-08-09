import React from 'react';


function ProductList({ addToCart }) {
  const products = ['Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product}>
            {product}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
