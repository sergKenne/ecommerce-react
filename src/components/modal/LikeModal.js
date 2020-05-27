import React from "react";
import { connect } from "react-redux";
import { addProductToFavorite } from "../../action/addProductToFavorite";
import { removeProductfromFavorite } from "../../action/removeProductfromFavorite";
import {addProductToBasket} from '../../action/addProductToBasket';
import Swal from 'sweetalert2';
import { cleanFavorite } from "../../action/cleanFavorite";

function LikeModal({productsBasket, favoriteProducts, removeFavorite, CleanAllFavorite, addBasket }) {

  const deleteFavorite = (id) => {
    Swal.fire({
        text: "Are You Sure You Want To Delete This Product?",
        showCancelButton: true,
        confirmButtonColor: '#ff5722',
        cancelButtonColor: '#ff5722',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => { 
        if (result.value) {
            removeFavorite(id)
        }
    })  
  };

  const addAllToBasket = () => {
   
      if(favoriteProducts.length > 0) {
         for(var i=0; i<favoriteProducts.length; i++) {
            if( productsBasket.find(elt => elt.id === favoriteProducts[i].id ) === undefined ) {
              addBasket(favoriteProducts[i]) ;
            }
         }
         CleanAllFavorite();
      }
  }

  return (
    <div className="basket-modal like-modal-js">
      <div className="contain-wrap basket-modal__wrapper">
        <div className="basket-modal__inner">
          <div className="basket-modal__inner-card">
            {favoriteProducts.map((prod) => {
              return (
                <div className="shop-card shop-card--basket-modal card" key={Math.random()} >
                  <div className="shop-card__picture">
                    <img src={`../../${prod.img}`} alt={prod.title} className="shop-card__image shop-card__image--basket-modal" />
                  </div>
                  <div className="shop-card__description shop-card__description--basket-modal">
                    <h5 className="shop-card__title shop-card__title--basket-modal">
                        {prod.title.length <= 20 ? prod.title : `${prod.title.substring(0, 20)}...`} 
                    </h5>
                    <div className="shop-card__price">$<span className="shop-card__price-counter"> {prod.price}</span></div>
                  </div>
                  <div className="basket-modal__inner-icons">
                    <span className="material-icons basket-modal__icon"onClick={() => deleteFavorite(prod.id)}> remove</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basket-modal__wrap-btn">
            {
                favoriteProducts.length ? (
                    <button className="btn btn-small basket-modal__btn" onClick={addAllToBasket}>Add All To Cart</button>
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
  );
}

const mapStateToProps = (state) => {
  return {
    productsBasket: state.productsBasket,
    favoriteProducts: state.favoriteProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBasket: (item) => dispatch(addProductToBasket(item)),
    addFavorite: (item) => dispatch(addProductToFavorite(item)),
    removeFavorite: (id) => dispatch(removeProductfromFavorite(id)),
    //addAllFavoriteToBasket: (prod) => dispatch(addAll(prod)),
    CleanAllFavorite: () => dispatch(cleanFavorite())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeModal);
