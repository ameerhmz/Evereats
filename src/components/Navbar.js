import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="main-navbar"
      style={{
        background: "linear-gradient(90deg, #041513ff, #00897b)",
        padding: "12px 24px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        position: "relative",
      }}
    >
      <div
        className="navbar-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Left side: Products */}
        <div style={{ display: "flex", gap: 16, flex: 1 }}>
          <Link
            to="/"
            className="navbar-pill"
            style={{
              color: "#e0f2f1",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#b2dfdb")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e0f2f1")}
          >
            Products
          </Link>
        </div>

        {/* Center: EverEats logo */}
        <Link
          to="/"
          className="navbar-logo"
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 8,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            userSelect: "none",
            textDecoration: "none",
            pointerEvents: "auto",
          }}
        >
          <span role="img" aria-label="logo">
            🥗
          </span>{" "}
          EverEats
        </Link>

        {/* Right side: Cart */}
        <div style={{ display: "flex", gap: 16, flex: 1, justifyContent: "flex-end" }}>
          <Link
            to="/cart"
            className="navbar-pill"
            style={{
              color: "#e0f2f1",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#b2dfdb")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e0f2f1")}
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
