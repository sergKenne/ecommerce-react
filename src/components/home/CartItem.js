import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const CartItem = ({ cartElt }) => {

    const [btn, setBtn] = useState(true);

    const handleSetVisibility = (event) => {
        event.stopPropagation();
        setBtn(false)
    }

    const showBtn = btn ? (
                <button onClick={ handleSetVisibility } className="btn-floating halfway-fab waves-effect waves-light btn-large red" href="#">
                    <i className="material-icons">shopping_cart</i>
                </button>
            ) : (
                <Link to="/cart" className="btn-floating halfway-fab waves-effect waves-light btn-large red">
                    <i className="material-icons">visibility</i>
                </Link>
            );  
  
    return (
        <span key={ cartElt.id }>
            <div className="card">
                <div className="card-image">
                    <img src={ cartElt.img } />
                    { showBtn }
                    <span className="material-icons card-favorite">favorite </span>
                </div>
                <div className="card-content">
                    <span className="card-title">{ cartElt.title }</span>
                    <div className="card-footer">
                        <span className="card-price">$<span>{ cartElt.price }</span></span> 
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
        </span>
    )
}

export default CartItem
