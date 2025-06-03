import React from 'react';

const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <p>{product.description}</p>
  </div>
);

export default ProductCard;
