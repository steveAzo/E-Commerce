import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const storedCartData = localStorage.getItem('cartData');
    return storedCartData ? JSON.parse(storedCartData) : [];
  });

  

  const addToCart = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, { ...product }]);
  };

  const removeFromCart = (productId) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    )
  }

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  // Other context-related functions

  return (
    <CartContext.Provider value={{ selectedProducts, addToCart, removeFromCart }}>
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
