import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page-container about-page">
      <div className="content-card">
        <h1>About MyStore</h1>
        <p className="about-text">
          MyStore is a simple online product store created using React and React Router.
        </p>
        <div className="action-area">
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
