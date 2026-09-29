import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-icon-box" style={{ width: 28, height: 28 }}>
            <Layers size={16} />
          </div>
          <span>RouterX Application</span>
        </div>

        <div className="footer-text">
          <span>Multi-Page React Routing Assignment</span>
          <span style={{ margin: '0 8px', opacity: 0.5 }}>|</span>
          <span>Crafted with <Code size={14} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--accent-primary)' }} /> & React Router</span>
        </div>

        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <Link to="/about" style={{ color: 'var(--text-secondary)' }}>About</Link>
          <Link to="/users" style={{ color: 'var(--text-secondary)' }}>Users</Link>
        </div>
      </div>
    </footer>
  );
}
