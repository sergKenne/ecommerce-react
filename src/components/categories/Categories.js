import React from 'react'
import CategoriesAside from './CategoriesAside'
import CategoriesProducts from './CategoriesProducts'

const Categories = () => {
    return (
        <div className="categories">
            <div className="contain-wrap categories__row">
                <CategoriesAside/>
                <CategoriesProducts/>
            </div>
        </div>
    )
}

export default Categories;