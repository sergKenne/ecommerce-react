import React from 'react'

const ProductsSimilar = () => {
    return (
        <div className="similar-product shop__similar-product">
            <div className="contain-wrap">
                <h2 className="main-title similar-product__title">You Might Also Like</h2>
                <div className="similar-product__item">
                    <div className="card similar-product__card">
                        <div className="card-image">
                            <img src="image/gadget_2.jpg" />
                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                            <span className="material-icons card-favorite">favorite </span>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Digital Watch</span>
                            <div className="card-footer">
                                <span className="card-price">$<span>127.5</span></span> 
                                <span className="card-rating">
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                    <span className="material-icons empty">star</span>  
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card similar-product__card">
                        <div className="card-image">
                            <img src="image/item_24.jpg"/>
                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                            <span className="material-icons card-favorite">favorite </span>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Digital Watch</span>
                            <div className="card-footer">
                                <span className="card-price">$<span>127.5</span></span> 
                                <span className="card-rating">
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                    <span className="material-icons empty">star</span>  
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card similar-product__card">
                        <div className="card-image">
                            <img src="image/item_2.jpg"/>
                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                            <span className="material-icons card-favorite">favorite </span>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Digital Watch</span>
                            <div className="card-footer">
                                <span className="card-price">$<span>127.5</span></span> 
                                <span className="card-rating">
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                    <span className="material-icons empty">star</span>  
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card similar-product__card">
                        <div className="card-image">
                            <img src="image/item_21.jpg"/>
                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                            <span className="material-icons card-favorite">favorite </span>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Digital Watch</span>
                            <div className="card-footer">
                                <span className="card-price">$<span>127.5</span></span> 
                                <span className="card-rating">
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                    <span className="material-icons empty">star</span>  
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="tabs tabs-fixed-width  similar-product__btn">
                    <li className="tab"><a href="#">show all</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProductsSimilar
