import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import db from '../../assets/js/data/db';
import ProductPictures from './ProductPictures';
import {addProductToBasket} from '../../action/addProductToBasket';
import Swal from 'sweetalert2';
import M from "materialize-css/dist/js/materialize.min.js";

class ProductsDescription extends Component {

    state = {
        dataDescription: {
            // "id": 15,
            // "title": "vintage jean",
            // "img": "image/men_vintage-jean.jpg",
            // "price": 48,
            // "isFreeShipping": true,
            // "type": "men",
            // "tabs": ["image/vj1.jpg", "image/vj2.jpg", "image/vj3.jpg", "image/vj4.jpg", "image/vj5.jpg"]
        
        },
        view: false
    }

    addProduct = () => {

        if(this.props.productsBasket.length ) {
            this.setState({view: true});
            if(this.props.productsBasket.find(elt => elt.id === this.state.dataDescription.id )) {
                console.log("incart");
            } else {
                // this.setState({view: true});
                this.props.addBasket(this.state.dataDescription);

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    text: 'Your product Is Successfully added!',
                    showConfirmButton: true,
                    confirmButtonColor: '#ff5722',
                })
            }

        } else {
            this.props.addBasket(this.state.dataDescription);

            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Your product Is Successfully added!',
                showConfirmButton: true,
                confirmButtonColor: '#ff5722',
            })
        }
    }
    
    componentDidMount() {
        this.setState({
            dataDescription: db.products.find( item => item.id === parseInt(this.props.productId) )
        });

        var elems = document.querySelectorAll("select");
        M.FormSelect.init(elems, {});
    }

    render() {
        
        const {title, price } = this.state.dataDescription;

        return (
            <div className="contain-wrap product__row"> 
                <ProductPictures id={this.props.productId} />
                <div className="product__column">
                    <a href="#" className="product__link-show">Back to shop</a>
                    <h3 className="product__title">{title}</h3>
                    <span className="product__review">add a review</span>
                    <p className="product__price">$ <span className="product__price-counter">{price}</span></p>
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
                                        <option value="" >Color</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product__form-item">
                                <div className="input-field">
                                    <select>
                                        <option value="" >Size</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product__form-item">
                                <div className="input-field">
                                    <select>
                                        <option value="">Quantity</option>
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
                        {
                            this.state.view ? <Link to="/cart" className="btn btn-small product__btn">view cart</Link> 
                                            :  <button className="btn btn-small product__btn" onClick={ this.addProduct }>add to cart</button>
                        }
                       
                        <button className="btn btn-small product__btn product__btn--white">buy now</button>
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
}

const mapStateToProps = (state) => {
    return {
        productsBasket: state.productsBasket
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBasket: (item) => dispatch(addProductToBasket(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsDescription)
