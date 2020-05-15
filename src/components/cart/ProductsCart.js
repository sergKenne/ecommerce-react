import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import ShopCard from "./ShopCard";


const ProductsCart = ({productsBasket}) => {

  const [total, setTotal] = useState(sumPrice(productsBasket))

  function sumPrice(products) {
      let sum = 0;
      products.forEach(item => {
          sum = sum + item.price * item.quantity;
      })
      return sum;
  } 

  const totalPrice = (prod) => {
    setTotal( sumPrice(prod) )
  }

    return (
      <div className="shop__product-card">
        <div className="contain-wrap">
          {
            productsBasket && productsBasket.map(card => {
              return (
                 <ShopCard card={card}  key={card.id} sumByCard ={totalPrice}/>
              )   
            })
          }
        </div>
        <div className="contain-wrap ">
          <div className="shop__total">
            <h5 className="shop__total-text">
              <span>Total</span>
              <span>$ <span>{total.toFixed(2)}</span></span>
            </h5>
            <button className="btn btn-small">proceed to checkout</button>
          </div>
        </div>
      </div>
    );
}


const mapStateToProps = (state) => {
  return {
      productsBasket: state.productsBasket
  }
}

export default connect(mapStateToProps, null) (ProductsCart);



