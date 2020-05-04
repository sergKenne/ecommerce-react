import React from 'react'
import Banner from '../Banner'
import ProductsDescription from './ProductsDescription'
import ProductsSimilar from './ProductsSimilar'

const Products = () => {
    return (
        <div className="shop">
            <Banner/>
            <div className="product shop__product">
                <ProductsDescription />
                <ProductsSimilar/>
            </div>
        </div>
    )
}

export default Products
