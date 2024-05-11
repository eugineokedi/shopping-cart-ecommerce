import React, {useContext} from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import './Cart.css';

export default function Cart() {
  const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ?
      <div className='checkOut'>
        <p>Subtotal:{totalAmount} </p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button className='checkout button' onClick={() => {
              checkout();
              navigate("/checkout");
            }}>checkOut
        </button>
      </div>
      : <h1>Empty Cart</h1>}
    </div>
  )
}
