import React from 'react'

export default function Product(props) {
  const {id, name, price, image} = props.data;
  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='description'>
         <p>Model: {name}</p>
         <p>Ksh: {price}</p>
      </div>
      <button className='addToCartBtn'>Add to cart</button>
    </div>
  )
}
