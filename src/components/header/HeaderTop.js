import React from 'react';
import {Link} from 'react-router-dom'


const HeaderTop = () => {
    return (
        <div className="header__top">
            <div className="contain-wrap">
                <div className="header__top-row">
                    <div className="header__top-item  header__top-item--currency">
                        <span>english</span><span>usd</span>
                    </div>
                    <div className="header__top-item">
                        <Link to="/"><img src="../../image/logo.png" alt="logo" className="header__top-logo" /></Link>
                    </div>
                    <div className="top-icon header__top-item">
                        <div className="top-icon__item" id="basket-js"><i className="top-icon__icon fas fa-shopping-cart"></i><span className='top-icon__badge'>20</span></div>
                        <div className="top-icon__item" id="like-js"><i className="top-icon__icon fas fa-heart"></i><span className='top-icon__badge'>2</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
