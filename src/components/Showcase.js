import React from 'react';
import aside1 from '../assets/image/aside-1.jpg';
import aside2 from '../assets/image/aside-2.jpg'
import Background from '../assets/image/slider-1.jpg'

function Showcase() {
    return (
        <div className="showcase">
            <div className="contain-wrap showcase__info">
                <div className="showcase__big-sale" style ={{ background: `url(${Background})` }}>
                    <div className="showcase__description">
                        <h4 className="showcase__title">big sale</h4>
                        <h1 className="showcase__main-title">women's summer collection</h1>
                        <a href="#" className="btn btn-small showcase__btn">shop now</a>
                    </div>
                </div>
                <div className="showcase__news">
                    <div className="showcase__news-item showcase__news-item--top">
                        <img className="showcase__news-img" src={ aside1 } alt="sale" />
                    </div>
                    <div className="showcase__news-item showcase__news-item--bottom">
                        <img className="showcase__news-img" src={ aside2 } alt="sale" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase
