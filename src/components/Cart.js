import React, { useContext, useMemo } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, decrementFromCart, addToCart } = useContext(CartContext);

  const total = useMemo(() => {
    return cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }, [cart]);

  return (
    <div className="app-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              width={48}
              height={48}
              style={{
                borderRadius: "8px",
                objectFit: "cover",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                flexShrink: 0,
              }}
            />
            <div className="cart-item-details">
              <div className="name" title={item.name}>
                {item.name}
              </div>
              <div>
                ₹{item.price} × {item.quantity} ={" "}
                <strong>₹{item.price * item.quantity}</strong>
              </div>
            </div>
            <div className="cart-item-actions">
              <button
                onClick={() => decrementFromCart(item)}
                aria-label={`Remove one ${item.name}`}
              >
                Remove One
              </button>
              <button
                onClick={() => addToCart(item)}
                aria-label={`Add one ${item.name}`}
              >
                Add One
              </button>
            </div>
          </div>
        ))
      )}
      <div>Total: ₹{total}</div>
      <Link to="/checkout" className="checkout-pay-btn">
        Checkout
      </Link>
    </div>
  );
}

export default Cart;
