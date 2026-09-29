import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          MyStore
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            About
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
