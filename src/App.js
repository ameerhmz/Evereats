import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

// Lazy load route components
const ProductList = lazy(() => import("./components/ProductList"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));

function Footer() {
  return (
    <footer style={{
      marginTop: "40px",
      padding: "20px 0",
      textAlign: "center",
    }}>
      <a
        href="https://www.instagram.com/__ameer_hamza?igsh=enFmaGZ6ZGk4eW45"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Instagram Profile"
      >
        <img
          src="/images/Insta_QR.jpeg"
          alt="Instagram QR"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "contain",
            borderRadius: "16px",
            boxShadow: "0 2px 10px rgba(30,64,175,0.12)",
            cursor: "pointer",
          }}
          loading="lazy"
        />
      </a>
      <div style={{ marginTop: '12px' }}>
        <a
          href="https://www.instagram.com/__ameer_hamza?igsh=enFmaGZ6ZGk4eW45"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#60a5fa",
            fontWeight: "700",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          @__ameer_hamza
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
