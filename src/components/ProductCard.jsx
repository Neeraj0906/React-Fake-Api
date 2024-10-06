import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg product-card">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover mb-4 product-img"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
