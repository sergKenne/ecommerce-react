import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

class ProductsCart extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });
    }

    render() {
        return (
            <div class="shop__product-card">
                <div class="contain-wrap">
                    <div class="shop-card card">
                        <div class="shop-card__picture">
                                <img src="image/person.jpg" alt="" class="shop-card__image" />
                        </div>
                        <div class="shop-card__description">
                            <h5 class="shop-card__title">Super Jacket</h5>
                            <p class="shop-card__text">Delivery in 3-4 days | Free</p>
                        </div>
                        <div class="shop-card__price">$<span class="shop-card__price-counter">99</span></div>
                        <div class=" shop-card__form">
                            <label>Quantity</label>
                            <div class="input-field shop-card__select">
                                <select>
                                    <option value="" disabled selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="1">4</option>
                                    <option value="2">5</option>
                                    <option value="3">6</option>
                                </select>
                            </div>
                        </div> 
                        <p class="shop-card__price">$<span class="shop-card__price-counter">567</span></p>
                        <div class=""><span class="material-icons shop-card__icon">delete</span></div>
                    </div>
                    <div class="shop-card card">
                        <div class="shop-card__picture">
                            <img src="image/person.jpg" alt="" class="shop-card__image" />
                        </div>
                        <div class="shop-card__description">
                            <h5 class="shop-card__title">Super Jacket</h5>
                            <p class="shop-card__text">Delivery in 3-4 days | Free</p>
                        </div>
                        <p class="shop-card__price">$<span class="shop-card__price-counter">90</span></p>
                        <div class=" shop-card__form">
                            <label>Quantity</label>
                            <div class="input-field shop-card__select">
                                <select>
                                    <option value="" disabled selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="1">4</option>
                                    <option value="2">5</option>
                                    <option value="3">6</option>
                                </select>
                            </div>
                        </div> 
                        <p class="shop-card__price">$<span class="shop-card__price-counter">90</span></p>
                        <div class=""><span class="material-icons shop-card__icon">delete</span></div>
                    </div>
                </div>
                <div class="contain-wrap shop__total">
                    <h5 class="shop__total-text"><span >Total</span><span>$357</span></h5>
                    <button  class="btn btn-small">proceed to checkout</button>
                </div>
            </div>
        )
    }
}

export default ProductsCart;


