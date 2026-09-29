import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productsData';

export default function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="page-container not-found-page">
        <div className="content-card">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
          <Link to="/users" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container detail-page">
      <div className="product-detail-card">
        <span className="product-id-tag">Product ID: #{product.id}</span>
        <h1 className="product-detail-title">{product.name}</h1>
        <p className="product-detail-price">₹{product.price.toLocaleString('en-IN')}</p>
        <p className="product-detail-desc">{product.description}</p>
        <div className="action-area" style={{ marginTop: '2rem' }}>
          <Link to="/users" className="btn btn-secondary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
