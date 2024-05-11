import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';

export  const shopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}
export default function ShopContext(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) =>({...prev, [itemId]: prev[itemId] +1}))

  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) =>({...prev, [itemId]: prev[itemId] - 1}))

  }
 
  return (
    <shopContext.Provider>{props.children}</shopContext.Provider>
  )
}
