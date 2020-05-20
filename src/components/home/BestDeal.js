import React from 'react'
import {Link} from 'react-router-dom'

function BestDeal() {
    return (
        <div className="best-deal">
            <Link to="/shop" className="best-deal__item">
                <img src="image/best_1.jpg" alt="" className="best-deal__bg-image" />
                <div className="best-deal__content">
                    <h2 className="best-deal__title">sale</h2>
                    <h6 className="best-deal__collection">women's collection</h6>
                    <span className="best-deal__percent">50% off</span>
                </div>
            </Link>
            <Link to="/shop" className="best-deal__item">
                <img src="image/best_2.jpg" alt="" className="best-deal__bg-image" />
                <div className="best-deal__content">
                    <h2 className="best-deal__title">sale</h2>
                    <h6 className="best-deal__collection">women's collection</h6>
                    <span className="best-deal__percent">50% off</span>
                </div>
            </Link>
            <Link to="/shop" className="best-deal__item">
                <img src="image/best_3.jpg" alt="" className="best-deal__bg-image" />
                <div className="best-deal__content">
                    <h2 className="best-deal__title">sale</h2>
                    <h6 className="best-deal__collection">women's collection</h6>
                    <span className="best-deal__percent">50% off</span>
                </div>
            </Link>
        </div>
    )
}

export default BestDeal
