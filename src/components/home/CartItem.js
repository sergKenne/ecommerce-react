import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {addProductToBasket} from '../../action/addProductToBasket'

const CartItem = (props) => {
    
    const [btn, setBtn] = useState(true);
    const addToCard = ( event) => {
        event.stopPropagation();
        setBtn(false);

        props.productsBasket.length ? 
            ( props.productsBasket.find(elt => elt.id === props.cartElt.id ) ? console.log("incard") : props.addBasket(props.cartElt)  )
        : 
            props.addBasket(props.cartElt)    
    }


    const showBtn = btn ? (
                <button onClick={ addToCard } className="btn-floating halfway-fab waves-effect waves-light btn-large red btnWrap">
                    <span  className="card__wrap-icon"><i className="material-icons">shopping_cart</i></span>
                </button>
            ) : (
                <Link to="/cart"  className="btn-floating halfway-fab waves-effect waves-light btn-large red">
                    <i className="material-icons">visibility</i>
                </Link>
            );  

    return (
        <div key={ props.cartElt.id } >
          
            <div className="card">
                <div className="card-image">
                    <Link to={`/products/${props.cartElt.type}/${props.cartElt.id}`}>
                        <img src={`../../${props.cartElt.img}`}  alt={props.cartElt.title}/>
                    </Link>
                    { showBtn }
                    <span className="material-icons card-favorite" >favorite </span>
                </div>
                <div className="card-content">
                    <span className="card-title" >{ props.cartElt.title }</span>
                    <div className="card-footer">
                        <span className="card-price">$<span>{ props.cartElt.price }</span></span> 
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

export default connect(mapStateToProps, mapDispatchToProps) (CartItem)
