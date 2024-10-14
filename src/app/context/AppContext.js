// src/app/context/AppContext.js
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      setCartCount(parsedCart.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartCount(cart.length); // Update cart count when cart changes
  }, [cart]);

  const addToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      });
    } else {
      console.log("Item already in the cart");
    }
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <AppContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
