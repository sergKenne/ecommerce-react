import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {removeProductFromBasket} from '../../action/removeProductInBasket';
import {updateQuantity} from '../../action/updateQuantity';
import M from "materialize-css/dist/js/materialize.min.js";
import Swal from 'sweetalert2'

function ShopCard({card, productsBasket, removeProduct, updateQuantity , totalPrice}) {

    const [quantity, setQuantity] = useState(card.quantity);
    const [totalByCard, setTotal] = useState( (card.price * card.quantity).toFixed(2) )

    const handleSelected = (e) => {
        setQuantity(e.target.value);
        const sumProd = (parseInt(e.target.value) * card.price).toFixed(2)
        setTotal( sumProd); 

        let prod = productsBasket.find(item => item.id === card.id);
        prod = {...prod, quantity: parseInt(e.target.value)}
        let ind = 0 ;
        productsBasket.forEach((el, index) =>{
            if(el.id === card.id ) ind = index
        });
        
        productsBasket[ind] = prod;
        updateQuantity(productsBasket);
    }

    useEffect(() => {
        var elems = document.querySelectorAll("select");
        M.FormSelect.init(elems, {});
    },[])

    useEffect(()=>{
        totalPrice(productsBasket)
    }, [quantity,productsBasket])

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

               removeProduct(id)
            }
        })  
    }

    return (
        <div className="shop-card card" key={card.id}>
            <div className="shop-card__picture">
            <img src={`../../${card.img}`} alt={card.title} className="shop-card__image" />
            </div>
            <div className="shop-card__description">
            <h5 className="shop-card__title">
                {card.title.length <= 18 ? card.title : `${card.title.substring(0, 15)}...`}
            </h5>
            <p className="shop-card__text">Delivery in 3-4 days | Free</p>
            </div>
            <div className="shop-card__price">
            $<span className="shop-card__price-counter">{card.price}</span>
            </div>
            <div className=" shop-card__form">
            <label>Quantity</label>
            <div className="input-field shop-card__select">
                <select value={quantity}  onChange={ handleSelected }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                </select>
            </div>
            </div>
            <p className="shop-card__price">
            $<span className="shop-card__price-counter">{totalByCard}</span>
            </p>
            <div className="">
            <span className="material-icons shop-card__icon" onClick={() => remove(card.id)}>delete</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productsBasket: state.productsBasket
    }
  }
  
  const mapStateToDispatch = dispatch => {
    return {
      removeProduct: (id) => dispatch(removeProductFromBasket(id)),
      updateQuantity: (basket) => dispatch(updateQuantity(basket))
    }
  }
  
  export default connect(mapStateToProps, mapStateToDispatch) (ShopCard);