import React, {useEffect, useState} from 'react'
import Banner from '../Banner'
import ProductsDescription from './ProductsDescription'
import ProductsSimilar from './ProductsSimilar'
import $ from 'jquery'

const Products = (props) => {
   
    const path = props.location.pathname.split("/");
    const productId= props.location.pathname.split("/")[path.length-1];

    return (
        <div className="shop">
            <Banner title="Product Details"/>
            <div className="product shop__product">
                <ProductsDescription productId={productId} />
                <ProductsSimilar productId={productId}/>
            </div>
        </div>
    )
}

export default Products
