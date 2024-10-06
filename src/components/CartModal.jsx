import React from "react";

const CartModal = ({ cartItems, closeCart, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center modal-overlay">
      <div className="bg-white p-6 rounded-lg w-full sm:w-2/3 lg:w-1/2 modal-content">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 cart-item">
                <span>{item.title}</span>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded close-btn"
          onClick={closeCart}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
