import React from 'react';
import logo from '../../assets/image/logo.png';
import sideBg from '../../assets/image/bg-sidebar.jpg';
import $ from 'jquery'


function Header() {

    const bgSide = { backgroundImage: `url(${sideBg})`};

    return (
        <div className="header">
            <div className="header__top">
                <div className="contain-wrap">
                    <div className="header__top-row">
                        <div className="header__top-item  header__top-item--currency">
                            <span>english</span><span>usd</span>
                        </div>
                        <div className="header__top-item">
                            <img src={ logo } alt="logo" className="header__top-logo" />
                        </div>
                        <div className="top-icon header__top-item">
                            <div className="top-icon__item" id="basket-js"><i className="top-icon__icon fas fa-shopping-cart"></i><span className='top-icon__badge'>20</span></div>
                            <div className="top-icon__item" id="like-js"><i className="top-icon__icon fas fa-heart"></i><span className='top-icon__badge'>2</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav header__nav" id="mainnav">
            <div className="contain-wrap nav__wrap">
                <div className="nav__btn-menu"></div>
                    <img className="nav__logo" src="image/logo.png" alt="logo" />
                    <div className="nav__list-wrap">
                    <ul className="nav__list" style={ ($(window).width() < 1201) ? bgSide: {backgroundImage:"none"} }>
                        <li className="nav__list-item">
                            <a href="#" className="nav__list-link">
                                <span className="material-icons nav__icon"> home </span>home
                            </a>       
                        </li>
                        <li className="nav__list-item">
                            <a href="#" className="nav__list-link">
                                <span className="material-icons nav__icon">pages</span>shop<span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                            </a>  
                            <ul className="nav__sub-list">
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">product detail</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">cart</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">checkout</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">payment</a></li>
                            </ul>
                        </li>        
                        <li className="nav__list-item">
                            <a href="#" className="nav__list-link">
                                <span className="material-icons nav__icon">party_mode</span>accessories
                            </a> 
                        </li>
                        <li className="nav__list-item">
                            <a href="#" className="nav__list-link">
                                <span className="material-icons nav__icon">party_mode</span>categories<span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                            </a>
                            <ul className="nav__sub-list nav__sub-list--categories">
                                <div className="nav__categories">
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">men<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">t-shirts</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">jeans</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">shoes</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">wallet</a></li>
                                        </div>
                                    </ul>
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">women<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">western wear</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">ethnic wear</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">sports wear</a></li>
                                        </div>
                                    </ul>
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">gadgets<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">headPhones</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">laptop</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">speaker</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">watch</a></li>
                                        </div>
                                    </ul>
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">accessories<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">jewellery</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">belts</a></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><a href="#" className="nav__sub-link nav__sub-link--categories">handBag</a></li>
                                        </div>
                                    </ul>
                                </div>
                            </ul>
                        </li>  
                        <li className="nav__list-item">
                            <a href="#" className="nav__list-link">
                                <span className="material-icons nav__icon">pages</span>page<span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                            </a>
                            <ul className="nav__sub-list">
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">about us</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">terms and conditions</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">privacy policy</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">faq</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">404 page</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">blog deatail</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">user profile</a></li>
                                <li className="nav__sub-item nav__sub-item--session">
                                    <a href="#" className="nav__sub-link nav__sub-link--session">session
                                        <span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                                        <span className="material-icons nav__session-icon">chevron_right</span>
                                    </a>
                                    <ul className="nav__session-list">
                                        <li className="nav__sub-item"><a href="#" className="nav__sub-link">sign in</a></li>
                                        <li className="nav__sub-item"><a href="#" className="nav__sub-link">register</a></li>
                                        <li className="nav__sub-item"><a href="#" className="nav__sub-link">forgot password</a></li>
                                        <li className="nav__sub-item"><a href="#" className="nav__sub-link">thank you</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__list-item"> 
                            <a href="#" className="nav__list-link">
                                <span className="material-icons nav__icon">perm_contact_calendar</span>contact us
                            </a>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header
