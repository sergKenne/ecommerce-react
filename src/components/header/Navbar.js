import React from 'react'
import { Link } from 'react-router-dom'
//import navbarLinksData  from '../../assets/js/data/navLinksData';

const Navbar = () => {

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
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">checkout</a></li>
                                <li className="nav__sub-item"><a href="#" className="nav__sub-link">payment</a></li>
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
      )

    // return (
    //     <div className="nav header__nav" id="mainnav">
    //         <div className="contain-wrap nav__wrap">
    //             <div className="nav__btn-menu"></div>
    //             <img className="nav__logo" src="image/logo.png" alt="logo" />
    //             <div className="nav__list-wrap">
    //                 <ul className="nav__list">

    //                     {
    //                         navbarLinksData.map( listItem => {

    //                             return (
    //                                 <li className="nav__list-item" key={listItem.menu_title}>
    //                                     <Link to={ listItem.path } className="nav__list-link">
    //                                         <span className="material-icons nav__icon">{ listItem.icon }</span> { listItem.menu_title } 
    //                                         { listItem.child_routes === null ? "" : <span className="material-icons nav__icon nav__icon--right">chevron_right</span>}       
    //                                     </Link>
    //                                     {
    //                                         listItem.child_routes !== null && 
    //                                         Array.isArray(listItem.child_routes) && (
    //                                             <ul className="nav__sub-list">
    //                                                 {
    //                                                     listItem.child_routes.map(item => {
    //                                                         return (
    //                                                             <li className={ item.child_routes === null ? "nav__sub-item" : "nav__sub-item nav__sub-item--session" } key={item.menu_title}>
    //                                                                 {
    //                                                                     item.child_routes === null ? 
    //                                                                         (
    //                                                                             <Link to={item.path} exact className="nav__sub-link">{item.menu_title}</Link>
    //                                                                         ) : (  
    //                                                                             <a href="#" className="nav__sub-link nav__sub-link--session">session
    //                                                                                 <span className="material-icons nav__icon nav__icon--right">chevron_right</span>
    //                                                                                 <span className="material-icons nav__session-icon">chevron_right</span>
    //                                                                             </a>
    //                                                                         )
    //                                                                 }
        
    //                                                                 <ul className="nav__session-list">
    //                                                                     {
    //                                                                         item.child_routes !== null && 
    //                                                                         Array.isArray(item.child_routes) && 
    //                                                                         item.child_routes.map(subItem => {
    //                                                                             return (
    //                                                                                 <li className="nav__sub-item" key={subItem.menu_title}>
    //                                                                                     <a href="#" className="nav__sub-link">{subItem.menu_title}</a>
    //                                                                                 </li>   
    //                                                                             )
    //                                                                         })
    //                                                                     }
    //                                                                 </ul> 
    //                                                             </li>
    //                                                         )
    //                                                     })  
    //                                                 }
    //                                             </ul>
    //                                          )
    //                                     }

    //                                     {
    //                                         listItem.child_routes !== null && listItem.type === "mega" && (

    //                                             <ul className="nav__sub-list nav__sub-list--categories">
    //                                                 <div className="nav__categories">
    //                                                     <ul className="nav__categories-item">
    //                                                         <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">men<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
    //                                                         <div className="nav__sub-inner">
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">t-shirts</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">jeans</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">shoes</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">wallet</a></li>
    //                                                         </div>
    //                                                     </ul>
    //                                                     <ul className="nav__categories-item">
    //                                                         <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">women<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
    //                                                         <div className="nav__sub-inner">
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">western wear</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">ethnic wear</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">sports wear</a></li>
    //                                                         </div>
    //                                                     </ul>
    //                                                     <ul className="nav__categories-item">
    //                                                         <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">gadgets<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
    //                                                         <div className="nav__sub-inner">
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">headPhones</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">laptop</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">speaker</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">watch</a></li>
    //                                                         </div>
    //                                                     </ul>
    //                                                     <ul className="nav__categories-item">
    //                                                         <li className="nav__sub-item nav__sub-item--categories category-js"><a href="#" className="nav__sub-link nav__sub-link--title">accessories<span className="material-icons nav__icon nav__icon--right">chevron_right</span></a></li>
    //                                                         <div className="nav__sub-inner">
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">jewellery</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">belts</a></li>
    //                                                             <li className="nav__sub-item nav__sub-item--categories"><a  href="/shop" className="nav__sub-link nav__sub-link--categories">handBag</a></li>
    //                                                         </div>
    //                                                     </ul>
    //                                                 </div>
    //                                             </ul>
    //                                         )
                                           
    //                                     }

    //                                 </li>
    //                             )
    //                         })
    //                     }
    //                 </ul> 
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Navbar
