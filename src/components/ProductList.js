import React, { useContext } from 'react';
import productsData from '../data/products';
import { CartContext } from './CartContext';

function ProductList() {
  const { cart, addToCart, decrementFromCart } = useContext(CartContext);

  const getQuantity = (productId) => {
    const item = cart.find(i => i.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div>
      <h2>Featured Products</h2>
      <div className="products">
        {productsData.map(prod => {
          const quantity = getQuantity(prod.id);
          return (
            <div key={prod.id} className="product">
              <img src={prod.image} alt={prod.name} />
              <h3>{prod.name}</h3>
              <p>
                <span>₹{prod.oldPrice}</span>
                <span>₹{prod.price}</span>
              </p>
              <div className="quantity-controls">
                {quantity > 0 && (
                  <button
                    className="qty-btn"
                    onClick={() => decrementFromCart(prod)}
                    aria-label={`Remove one ${prod.name}`}
                  >
                    –
                  </button>
                )}
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(prod)}
                  aria-label={`Add one ${prod.name}`}
                >
                  {quantity > 0 ? `${quantity}` : 'Add to Cart'}
                </button>
                <button
                  className="qty-btn"
                  onClick={() => addToCart(prod)}
                  aria-label={`Add one more ${prod.name}`}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
