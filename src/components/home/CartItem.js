import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addProductToBasket} from '../../action/addProductToBasket';
import {addProductToFavorite} from '../../action/addProductToFavorite';
import Swal from 'sweetalert2';

const CartItem = (props) => {
    
    const [btn, setBtn] = useState(true);
    const [like, setLike] = useState(true);

    const addToCard = ( event) => {
        event.stopPropagation();
        setBtn(false);

        props.productsBasket.length ? 
            ( props.productsBasket.find(elt => elt.id === props.cartElt.id ) ? console.log("incard") : props.addBasket(props.cartElt))
        : 
            props.addBasket(props.cartElt) ;

        Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Your product Is Successfully added!',
            showConfirmButton: true,
            confirmButtonColor: '#ff5722',
        })
    }

    const addToFavorite = () => {
        setLike(false);

        props.favoriteProducts.length ? 
            ( props.favoriteProducts.find(elt => elt.id === props.cartElt.id ) ? console.log("incard") : props.addFavorite(props.cartElt))
        : 
            props.addFavorite(props.cartElt) ;

        console.log(props.favoriteProducts)

        Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Your product Is Successfully added!',
            showConfirmButton: true,
            confirmButtonColor: '#ff5722',
        })
        
    }


    const showBtn = btn ? (
                <button onClick={ addToCard } className="btn-floating halfway-fab waves-effect  btn-large red btnWrap">
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
                    {
                        like ? <span className="material-icons card-favorite" onClick={addToFavorite}>favorite </span>
                             : <span className="material-icons card-favorite card-favorite--like">favorite </span>
                    }
                   
                </div>
                <div className="card-content">
                    <Link to={`/products/${props.cartElt.type}/${props.cartElt.id}`} className="card-title" >{ props.cartElt.title }</Link>
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
        productsBasket: state.productsBasket,
        favoriteProducts: state.favoriteProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBasket: (item) => dispatch(addProductToBasket(item)),
        addFavorite: (item) => dispatch(addProductToFavorite(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartItem)
