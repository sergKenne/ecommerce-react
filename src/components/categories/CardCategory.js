import React, { useState } from 'react';
import { Link } from 'react-router-dom'
//import Cart from '../cart/Cart';

const CardCategory = ({card}) => {

    const [btn, setBtn] = useState(true);

    const handleSetVisibility = (event) => {
        event.stopPropagation();
        setBtn(false);
    }

   
    const showBtn = btn ? (
        <button onClick={ handleSetVisibility } className="btn-floating halfway-fab waves-effect waves-light btn-large red btnWrap" href="#">
            <span  className="card__wrap-icon"><i className="material-icons">shopping_cart</i></span>
        </button>
    ) : (
        <Link to="/cart"  className="btn-floating halfway-fab waves-effect waves-light btn-large red">
            <i className="material-icons">visibility</i>
        </Link>
    );  

    return (
        <div className="card similar-product__card similar-product__card--categories">
            <div className="card-image categories__image categories__image--category">
                {/* <Link to={`/products/${card.brand}/${card.id}`}><img src={`../../${card.img}`  } /></Link> */}
                <Link to={`/products/women/17`}><img src={`../../${card.img}`} alt={card.title} /></Link>
                {/* <img src={card.img}/> */}
                {showBtn}
                <span className="material-icons card-favorite">favorite </span>
            </div>
            <div className="card-content">
            <span className="card-title card-title--category">{card.title}</span>
                <div className="card-footer">
                    <span className="card-price">$<span>{card.price}</span></span> 
                    <span className="card-rating">
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star_half</span>
                        <span className="material-icons empty">star</span>  
                    </span>
                </div>
            </div>
        </div>

    )
}

export default CardCategory
