import React, { useContext } from 'react'
import {shopContext} from '../../context/ShopContext';

export default function Product(props) {
  const {id, name, price, image} = props.data;
  const { addToCart, cartItems } = useContext(shopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='description'>
         <p>Model: {name}</p>
         <p>Ksh: {price}</p>
      </div>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}
