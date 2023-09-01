import React from "react";
 
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  remooveItem: (id) => {},
});

export default CartContext;