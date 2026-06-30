import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`, {
        params: { search: filter }
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Our Shoe Collection</h1>
      <input
        type="text"
        placeholder="Search shoes..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price">${product.price}</p>
                <a href={`/products/${product._id}`} className="btn btn-primary">View Details</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
