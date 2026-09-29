import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container home-page">
      <div className="hero-box">
        <span className="store-badge">MyStore</span>
        <h1 className="hero-title">Welcome to MyStore</h1>
        <p className="hero-subtitle">
          Find simple and quality products at affordable prices.
        </p>
        <Link to="/users" className="btn btn-primary">
          View Products
        </Link>
      </div>
    </div>
  );
}
