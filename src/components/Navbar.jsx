import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button onClick={openCart} className="relative cart-btn mb-24">
        Cart
        <span className="ml-2 bg-red-600 rounded-full text-white px-2 py-2 cart-count">
          {cartCount}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
