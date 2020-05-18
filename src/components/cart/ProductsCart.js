import React, { useState } from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import ShopCard from "./ShopCard";

const ProductsCart = ({productsBasket}) => {

  const [total, setTotal] = useState(sumPrice(productsBasket))
  
  function sumPrice(products) {
      let sum=0 ;
     
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
                <ShopCard card={card}  key={Math.random()} totalPrice ={totalPrice}/>
            )   
          })
        }
      </div>
      <div className="contain-wrap ">
        {
          productsBasket.length ? (
            <div className="shop__total">
              <h5 className="shop__total-text">
                <span>Total</span>
                <span>$ <span>{total.toFixed(2)}</span></span>
              </h5>
              <button className="btn btn-small">proceed to checkout</button>
            </div>
          ) : (
            <div className="shop__empty">
              <img className="shop__empty-img" src="../../image/empty_corbage.png"/>
               <h4 className="shop__empty-title">Your Shopping Bag Is Empty.</h4>
               <Link className="shop__shopping" to="/shop">Go For Shopping</Link>
            </div>
          )
        }
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



