import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData';

export default function Products() {
  return (
    <div className="page-container products-page">
      <h1 className="page-title">Products</h1>
      <p className="page-subtitle">Browse our selection of quality products.</p>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
            <Link to={`/users/${product.id}`} className="btn btn-primary btn-sm">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
