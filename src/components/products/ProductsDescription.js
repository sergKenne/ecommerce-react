import React from 'react'

const ProductsDescription = () => {
    return (
        <div className="contain-wrap product__row">
            <div className="product__column product__column--tabs">
                <ul className="product__tabs">
                    <li className="product__tabs-item"><img src="image/item_21.jpg" alt="" className="product__tabs-image" /></li>
                    <li className="product__tabs-item"><img src="image/item_22.jpg" alt="" className="product__tabs-image" /></li>
                    <li className="product__tabs-item"><img src="image/item_23.jpg" alt="" className="product__tabs-image" /></li>
                    <li className="product__tabs-item"><img src="image/item_24.jpg" alt="" className="product__tabs-image" /></li>
                </ul>
                <div className="product__big-image">
                    <img src="image/item_21.jpg" alt="" className="product__image" />
                </div>
            </div>
            <div className="product__column">
                <a href="#" className="product__link-show">Back to shop</a>
                <h3 className="product__title">White T-Shirt</h3>
                <span className="product__review">add a review</span>
                <p className="product__price">$ <span className="product__price-counter"> 19.45</span></p>
                <div>
                    <p className="product__indicator"> Availablity :<span className="product__result">In Stocks</span></p>
                    <p className="product__indicator">Product Code :<span className="product__result"> #EM1208</span></p>
                    <p className="product__indicator">Tags :<span className="product__result">White Graphic Women</span></p> 
                </div>
                <p className="product__description">Sit amet consectetur, adipisicing elit. Distinctio aperiam 
                    debitis ipsa veniam eos quas excepturi quae? Recusandae 
                    distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!
                </p>
                <ul className="product__list">
                    <li className="product__item">Slim Fit</li>
                    <li className="product__item"> 100% Cotton</li>
                    <li className="product__item">Free Shipping and delivery in 4 Days</li>
                </ul>
                <div className="product__form">
                    <form className="product__form-row">
                        <div className="product__form-item">
                            <div className="input-field">
                                <select>
                                    <option value="" disabled >Color</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="product__form-item">
                            <div className="input-field">
                                <select>
                                    <option value="" disabled >Size</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="product__form-item">
                            <div className="input-field">
                                <select>
                                    <option value="" disabled >Quantity</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <span className="product__review">add a review</span>
                <div className="product__row-btn">
                    <a href="#" className="btn btn-small product__btn">add to cart</a>
                    <a href="#" className="btn btn-small product__btn product__btn--white">buy now</a>
                </div>
                <div className="product__social">
                    <span className="product__social-label">Share Now</span>
                    <a href="#" className="product__social-link"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="product__social-link"><i className="fab fa-google"></i></a>
                    <a href="#" className="product__social-link"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="product__social-link"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProductsDescription
