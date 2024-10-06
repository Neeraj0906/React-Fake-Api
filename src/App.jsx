import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar"; // Make sure the filename matches
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Function to open modal
  const openCart = () => {
    setIsModalOpen(true); // Ensure this is setting the modal state correctly
  };

  // Function to close modal
  const closeCart = () => {
    setIsModalOpen(false); // Set modal state to close
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} openCart={openCart} />
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cartItems={cartItems}
          closeCart={closeCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
