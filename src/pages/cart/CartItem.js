import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopContext';

export default function CartItem(props) {
  const {id, name, price, image} = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cartItem'>
      <img src={image} alt=''/>
      <div className='description'>
         <p>Model: {name}</p>
         <p>Ksh: {price}</p>
         <div className='countHandler'>
           <button onClick={() => removeFromCart(id)}>-</button>
           <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
           <button onClick={() => addToCart(id)}>+</button>
         </div>
      </div>
    </div>
  )
}
