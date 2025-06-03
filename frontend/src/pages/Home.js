import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  );
};

export default Home;
