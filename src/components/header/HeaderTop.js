import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import M from "materialize-css/dist/js/materialize.min.js";


const HeaderTop = (props) => {


    useEffect(() => {
        var elems = document.querySelectorAll("select");
        M.FormSelect.init(elems, {});  
    }, [])

    return (
        <div className="header__top">
            <div className="contain-wrap">
                <div className="header__top-row">
                    <div className="header__top-item  header__top-item--currency">
                        <div className="input-field">
                            <select>
                                <option value="">USA</option>
                                <option value="1">EU</option>
                                <option value="2">RUB</option>
                            </select>
                        </div>
                    </div>
                    <div className="header__top-item">
                        <Link to="/"><img src="../../image/logo.png" alt="logo" className="header__top-logo" /></Link>
                    </div>
                    <div className="top-icon header__top-item scroll-basket-js">
                        <div className="top-icon__item" id="basket-js">
                            <i className="top-icon__icon fas fa-shopping-cart"></i>
                            <span className='top-icon__badge'>{props.productsBasket.length}</span>
                        </div>
                        <div className="top-icon__item" id="like-js">
                            <i className="top-icon__icon fas fa-heart"></i><span className='top-icon__badge'>{props.favoriteProducts.length}</span>
                        </div>
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

export default connect(mapStateToProps, null) (HeaderTop)
