import React from 'react'
import Banner from '../Banner'
import Categories from '../categories/Categories'

const Shop = (props) => {
    return (
        <div className="shop">
            <Banner title="Products" />
            <Categories/>
        </div>
    )
}

export default Shop;
