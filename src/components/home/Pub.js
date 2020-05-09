import React from 'react'

function Pub() {
    return (
        <div className="pub">
            <div className="contain-wrap">
                <div className="pub__row">
                    <div className="pub-cart pub__item">
                        <img className="pub-cart__image" src="image/car.png" alt="" />
                        <div className="pub-cart__body">
                            <h5 className="pub-cart__text">FREESHIPING</h5>
                            <h6 className="pub-cart__subtitle">Every Day / Every Order</h6>
                            <span className="pub-cart__footer">*All Order Over $100</span>
                        </div>
                    </div>
                    <div className="pub-cart pub__item">
                        <img className="pub-cart__image" src="image/caller.png" alt="" />
                        <div className="pub-cart__body">
                            <h5 className="pub-cart__text">FRIENDLYSUPPORT</h5>
                            <h6 className="pub-cart__subtitle">24/7 Dedicated Support</h6>
                            <span className="pub-cart__footer">*Only In Usa</span>
                        </div>
                    </div>
                    <div className="pub-cart pub__item">
                        <img className="pub-cart__image" src="image/currency.png" alt="" />
                        <div className="pub-cart__body">
                            <h5 className="pub-cart__text">SECURE</h5>
                            <h6 className="pub-cart__subtitle">Money Back Guranted</h6>
                            <span className="pub-cart__footer">*Conditions Apply</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Pub
