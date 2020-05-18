import React from 'react';
import {Link} from 'react-router-dom'

function Showcase() {
    return (
        <div className="showcase">
            <div className="contain-wrap showcase__info">
                <div className="showcase__big-sale">
                    <div className="showcase__description">
                        <h4 className="showcase__title">big sale</h4>
                        <h1 className="showcase__main-title">women's summer collection</h1>
                        <Link to="/shop" className="btn btn-small showcase__btn">shop now</Link>
                    </div>
                </div>
                <div className="showcase__news">
                    <div className="showcase__news-item showcase__news-item--top">
                        <img className="showcase__news-img" src="image/aside-1.jpg" alt="sale" />
                    </div>
                    <div className="showcase__news-item showcase__news-item--bottom">
                        <img className="showcase__news-img" src="image/aside-2.jpg" alt="sale" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase
