import React from 'react';
import { Link } from 'react-router-dom';
import db from '../../assets/js/data/db';
import CartItem from '../../components/home/CartItem'

const ProductsSimilar = ({productId}) => {

    const productType = db.products.find( item => item.id === parseInt(productId) ).type;
    var productSimilar = db.products.filter(product => product.type === productType)

    return (
        <div className="similar-product shop__similar-product">
            <div className="contain-wrap">
                <h2 className="main-title similar-product__title">You Might Also Like</h2>
                <div className="similar-product__item">
                    {
                       productSimilar.map((item, index) => index < 4 && (
                            <div className="similar-product__card" key={item.id}>
                                <CartItem cartElt={item}/>
                            </div>
                       ) )  
                    }
                </div>
                <ul className="tabs tabs-fixed-width  similar-product__btn">
                    <Link to="/shop"><li className="tab"><span className="taBtn tab1 active" id="tab1">show all</span></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default ProductsSimilar
