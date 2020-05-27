import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {

      return (
        <div className="nav header__nav" id="mainnav">
            <div className="contain-wrap nav__wrap">
                <div className="nav__btn-menu"></div>
                <Link to="/"><img className="nav__logo" src="../../image/logo.png" alt="logo" /></Link>
                <div className="nav__list-wrap">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <Link to="/" className="nav__list-link">
                                <span className="material-icons nav__icon"> home </span>home
                            </Link>       
                        </li>
                        <li className="nav__list-item">
                            <span className="nav__list-link">
                                <span className="material-icons nav__icon">pages</span>shop<span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                            </span>  
                            <ul className="nav__sub-list">
                                <li className="nav__sub-item"><Link to="products/women/19" className="nav__sub-link">product detail</Link></li>
                                <li className="nav__sub-item"><Link to="/cart" className="nav__sub-link">cart</Link></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">checkout</span></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">payment</span></li>
                            </ul>
                        </li>        
                        <li className="nav__list-item">
                            <Link to="/shop" className="nav__list-link">
                                <span className="material-icons nav__icon">party_mode</span>accessories
                            </Link> 
                        </li>
                        <li className="nav__list-item">
                            <span className="nav__list-link">
                                <span className="material-icons nav__icon">party_mode</span>categories<span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                            </span>
                            <ul className="nav__sub-list nav__sub-list--categories">
                                <div className="nav__categories">
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">men<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">t-shirts</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">jeans</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">shoes</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">wallet</Link></li>
                                        </div>
                                    </ul>
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">women<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">western wear</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">ethnic wear</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">sports wear</Link></li>
                                        </div>
                                    </ul>
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">gadgets<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">headPhones</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">laptop</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">speaker</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">watch</Link></li>
                                        </div>
                                    </ul>
                                    <ul className="nav__categories-item">
                                        <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">accessories<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
                                        <div className="nav__sub-inner">
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">jewellery</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">belts</Link></li>
                                            <li className="nav__sub-item nav__sub-item--categories"><Link to="/shop" className="nav__sub-link nav__sub-link--categories">handBag</Link></li>
                                        </div>
                                    </ul>
                                </div>
                            </ul>
                        </li>  
                        <li className="nav__list-item">
                            <span className="nav__list-link">
                                <span className="material-icons nav__icon">pages</span>page<span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                            </span>
                            <ul className="nav__sub-list">
                                <li className="nav__sub-item"><span className="nav__sub-link">about us</span></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">terms and conditions</span></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">privacy policy</span></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">faq</span></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">404 page</span></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">blog deatail</span></li>
                                <li className="nav__sub-item"><span className="nav__sub-link">user profile</span></li>
                                <li className="nav__sub-item nav__sub-item--session">
                                    <span className="nav__sub-link nav__sub-link--session">session
                                        <span className="material-icons nav__icon nav__icon--right">chevron_right</span>
                                        <span className="material-icons nav__session-icon">chevron_right</span>
                                    </span>
                                    <ul className="nav__session-list">
                                        <li className="nav__sub-item"><span className="nav__sub-link">sign in</span></li>
                                        <li className="nav__sub-item"><span className="nav__sub-link">register</span></li>
                                        <li className="nav__sub-item"><span className="nav__sub-link">forgot password</span></li>
                                        <li className="nav__sub-item"><span className="nav__sub-link">thank you</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__list-item"> 
                            <span className="nav__list-link">
                                <span className="material-icons nav__icon">perm_contact_calendar</span>contact us
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      )

}

export default Navbar
