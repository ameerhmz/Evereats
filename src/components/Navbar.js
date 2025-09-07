import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="navbar-row" style={{ justifyContent: 'space-between' }}>
        <div className="navbar-logo" style={{ fontSize: 28, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="logo">🥗</span> EverEats
        </div>
        <div className="navbar-links" style={{ display: 'flex', gap: 16 }}>
          <Link to="/" className="navbar-pill">Products</Link>
          <Link to="/cart" className="navbar-pill">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
