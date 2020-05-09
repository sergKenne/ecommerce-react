import React, { useState } from 'react';
import { Link } from 'react-router-dom'

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
            <div class="card similar-product__card similar-product__card--categories">
                <div class="card-image categories__image categories__image--category">
                    <img src={card.img}/>
                    {showBtn}
                    <span class="material-icons card-favorite">favorite </span>
                </div>
                <div class="card-content">
                <span class="card-title">{card.title}</span>
                    <div class="card-footer">
                        <span class="card-price">$<span>{card.price}</span></span> 
                        <span class="card-rating">
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star</span>
                            <span class="material-icons">star_half</span>
                            <span class="material-icons empty">star</span>  
                        </span>
                    </div>
                </div>
            </div>

        )
}

export default CardCategory
