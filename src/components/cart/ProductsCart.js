import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class ProductsCart extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});
    });
  }

  render() {
    return (
      <div className="shop__product-card">
        <div className="contain-wrap">
          <div className="shop-card card">
            <div className="shop-card__picture">
              <img src="image/m1.jpg" alt="" className="shop-card__image" />
            </div>
            <div className="shop-card__description">
              <h5 className="shop-card__title">Super Jacket</h5>
              <p className="shop-card__text">Delivery in 3-4 days | Free</p>
            </div>
            <div className="shop-card__price">
              $<span className="shop-card__price-counter">99</span>
            </div>
            <div className=" shop-card__form">
              <label>Quantity</label>
              <div className="input-field shop-card__select">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="1">4</option>
                  <option value="2">5</option>
                  <option value="3">6</option>
                </select>
              </div>
            </div>
            <p className="shop-card__price">
              $<span className="shop-card__price-counter">567</span>
            </p>
            <div className="">
              <span className="material-icons shop-card__icon">delete</span>
            </div>
          </div>
          <div className="shop-card card">
            <div className="shop-card__picture">
              <img src="image/m2.jpg" alt="" className="shop-card__image" />
            </div>
            <div className="shop-card__description">
              <h5 className="shop-card__title">Super Jacket</h5>
              <p className="shop-card__text">Delivery in 3-4 days | Free</p>
            </div>
            <p className="shop-card__price">
              $<span className="shop-card__price-counter">90</span>
            </p>
            <div className=" shop-card__form">
              <label>Quantity</label>
              <div className="input-field shop-card__select">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="1">4</option>
                  <option value="2">5</option>
                  <option value="3">6</option>
                </select>
              </div>
            </div>
            <p className="shop-card__price">
              $<span className="shop-card__price-counter">90</span>
            </p>
            <div className="">
              <span className="material-icons shop-card__icon">delete</span>
            </div>
          </div>
        </div>
        <div className="contain-wrap shop__total">
          <h5 className="shop__total-text">
            <span>Total</span>
            <span>$<span>357</span></span>
          </h5>
          <button className="btn btn-small">proceed to checkout</button>
        </div>
      </div>
    );
  }
}

export default ProductsCart;
