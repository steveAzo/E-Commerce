import React, { createContext, useContext, useState } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToCart = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, { ...product }]);
  };

  // Other context-related functions

  return (
    <CartContext.Provider value={{ selectedProducts, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
