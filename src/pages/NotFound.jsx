import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container not-found-page">
      <div className="content-card">
        <h2>404 - Page Not Found</h2>
        <p>The page you requested could not be found.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
