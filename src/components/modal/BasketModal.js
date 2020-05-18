import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import {removeProductFromBasket} from '../../action/removeProductInBasket'
import Swal from 'sweetalert2'

function BasketModal(props) {

    const remove = (id) => {
        Swal.fire({
            //title: 'Are You Sure You Want To Delete This Product?',
            text: "Are You Sure You Want To Delete This Product?",
            //icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff5722',
            cancelButtonColor: '#ff5722',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes'
          }).then((result) => { 
            if (result.value) {
                
               props.removeProduct(id)
            }
          })
        
    }

    return (
        <div className="basket-modal basket-modal-js">
            <div className="contain-wrap basket-modal__wrapper">
                <div className="basket-modal__inner">
                    <div className="basket-modal__inner-card">
                    {
                       props.productsBasket.map(card => {
                           return (
                            <div className="shop-card shop-card--basket-modal card" key={Math.random()}>
                                <div className="shop-card__picture shop-card__picture--modal">
                                    <img src={`../../${card.img}`} alt={card.title} className="shop-card__image shop-card__image--basket-modal" />
                                </div>
                                <div className="shop-card__description shop-card__description--basket-modal">
                                    <h5 className="shop-card__title shop-card__title--basket-modal">{card.title}</h5>
                                    <div className="shop-card__price">$<span className="shop-card__price-counter">{card.price}</span></div>
                                </div>
                                <div className="basket-modal__inner-icons" id="warning">
                                    <span className="material-icons basket-modal__icon" onClick={() => remove(card.id)} >remove_shopping_cart</span>
                                    <Link to="/cart" className="material-icons basket-modal__icon">create</Link>  
                                </div>
                            </div>
                           )
                       })
                    }
                    </div> 
                    <div className="basket-modal__wrap-btn">
                    {
                        props.productsBasket.length ? (
                            <button className="btn btn-small basket-modal__btn">checkout</button>
                        ) : (
                            <div className="basket-modal__alert">
                                <span>no product found</span>
                            </div>
                        )
                    }   
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { productsBasket: state.productsBasket}  
}

const mapStateToDispatch = dispatch => {
  return { removeProduct: (id) => dispatch(removeProductFromBasket(id)) } 
}

export default connect(mapStateToProps, mapStateToDispatch) (BasketModal)

