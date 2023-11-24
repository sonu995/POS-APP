import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [taxRate, setTaxRate] = useState(18);
  const [discount, setDiscount] = useState(0);

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { name: '', price: 0, quantity: 1, taxRate: 0 }, // Added taxRate property for each item
    ]);
  };

  const editItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity * item.taxRate / 100), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    return subtotal + tax - discount;
  };

  const incrementQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const decrementQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity -= 1;
    setItems(updatedItems);
  };

  const handleTaxRateChange = (index, newValue) => {
    if (newValue) {
      const taxPercentage = parseInt(newValue.match(/\d+/)[0], 10);
      const updatedItems = [...items];
      updatedItems[index].taxRate = taxPercentage;
      setItems(updatedItems);
    }
  };

  const addProductCart = (product) => {
    setItems((prevItems) => [
      ...prevItems,
      { name: product.productName, price: product.Price, quantity: product.Quantity, taxRate: 0 }, // Added taxRate property for each item
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        taxRate,
        setTaxRate,
        discount,
        setDiscount,
        addItem,
        editItem,
        deleteItem,
        calculateSubtotal,
        calculateTax,
        calculateTotal,
        incrementQuantity,
        decrementQuantity,
        handleTaxRateChange,
        addProductCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
