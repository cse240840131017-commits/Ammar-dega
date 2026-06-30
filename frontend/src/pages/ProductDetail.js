import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const addToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p className="product-price">${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
