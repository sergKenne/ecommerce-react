import React, { useState } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {addProductToBasket} from '../../action/addProductToBasket';
import Swal from 'sweetalert2';

const CardCategory = ({card, productsBasket, addBasket}) => {

    const [btn, setBtn] = useState(true);

    const handleSetVisibility = (event) => {
        event.stopPropagation();
        setBtn(false);

        productsBasket.length ? 
            ( productsBasket.find(elt => elt.id === card.id ) ? console.log("incard") : addBasket(card))
        : 
            addBasket(card) ;

        Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Your product Is Successfully added!',
            showConfirmButton: true,
            confirmButtonColor: '#ff5722',
        })
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
                <Link to={`/products/women/17`}><img src={`../../${card.img}`} alt={card.title} /></Link>
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

const mapStateToProps = (state) => {
    return {
        productsBasket: state.productsBasket
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBasket: (item) => dispatch(addProductToBasket(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CardCategory)
