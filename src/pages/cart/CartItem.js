import React from 'react'

export default function CartItem(props) {
  const {id, name, price, image} = props.data;
  return (
    <div className='cartItem'>
      <img src={name} alt=''/>
      <div className='description'>
         <p>Model: {name}</p>
         <p>Ksh: {price}</p>
      </div>
    </div>
  )
}
