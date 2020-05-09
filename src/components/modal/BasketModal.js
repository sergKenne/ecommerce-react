import React from 'react'

function BasketModal() {
    return (
        <div className="basket-modal basket-modal-js">
            <div className="contain-wrap basket-modal__wrapper">
                <div className="basket-modal__inner">
                    <div className="shop-card shop-card--basket-modal card">
                        <div className="shop-card__picture">
                            <img src="image/bj1.jpg" alt="" className="shop-card__image shop-card__image--basket-modal" />
                        </div>
                        <div className="shop-card__description shop-card__description--basket-modal">
                            <h5 className="shop-card__title shop-card__title--basket-modal">Super Jacket</h5>
                            <div className="shop-card__price">$<span className="shop-card__price-counter">99</span></div>
                        </div>
                        <div className="basket-modal__inner-icons">
                            <span className="material-icons basket-modal__icon">remove_shopping_cart</span>
                            <span className="material-icons basket-modal__icon">create</span>  
                        </div>
                    </div>
                    <div className="basket-modal__wrap-btn">
                        <button className="btn btn-small basket-modal__btn">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketModal
