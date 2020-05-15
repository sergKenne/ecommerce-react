import React from 'react'
import Banner from '../Banner'
import ProductsCart from './ProductsCart'



const Cart = (props) => {

    return (
        <div className="shop">
            <Banner title="Here’s What’s In Your Bag."/>
            <ProductsCart/>
        </div>
    )
}

  export default  Cart;

