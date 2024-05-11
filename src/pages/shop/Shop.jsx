import React from 'react'
import './Shop.css';
import {PRODUCTS} from '../../Products';
import Product from './Product';

export default function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Shoppify</h1>
      </div>
      <div className='products'>
       {PRODUCTS.map((product) => (
       <Product data={product}/>
       ))}
      </div>
    </div>
  )
}
