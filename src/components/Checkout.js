import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(); // Avoid loading twice
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

function Checkout() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const payNow = async () => {
    if (cart.length === 0) return; // Prevent payment if cart is empty
    await loadRazorpayScript();
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: total * 100,
      currency: "INR",
      name: "EverEats Clone",
      description: "Order Payment",
      handler: (response) => {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
    };
    new window.Razorpay(options).open();
  };

  return (
    <div className="app-container">
      <h2>Checkout</h2>
      <p>Total Amount: ₹{total}</p>
      <button
        className="checkout-pay-btn"
        onClick={payNow}
        disabled={cart.length === 0}
        style={{ cursor: cart.length === 0 ? "not-allowed" : "pointer", opacity: cart.length === 0 ? 0.6 : 1 }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Checkout;
