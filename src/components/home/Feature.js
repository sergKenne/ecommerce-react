import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';



class Feature extends Component {

    componentDidMount() {
        var elem = document.querySelector('.tabs');
        var options = {}
        var instance = M.Tabs.init(elem, options);
    }
    
    render() {
        return (
            <div className="featured">
                <div className="contain-wrap">
                    <h2 className="main-title featured__title">feature products</h2>
                    <div className="featured__tabs">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab"><a className="active" href="#test2">accessories</a></li>
                            <li className="tab"><a  href="#test1">gadgets</a></li>
                            <li className="tab"><a href="#test4">men</a></li>
                            <li className="tab"><a href="#test0">women</a></li>
                        </ul>
                        <div id="test1" className="test">
                            <div className="your-class featured__slide-tabs">
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_1.jpg" />
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
                                <div>
                                    <div className="card">
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
                                </div>
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_3.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Black Smartphone</span>
                                            <div  className="card-footer">
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_4.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Wired Headphone</span>
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_5.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Circular Speaker</span>
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
                            </div>
                        </div>
                        <div id="test2" className="test">
                            <div className="your-class featured__slide-tabs">
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_1.jpg" />
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
                                <div>
                                    <div className="card">
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
                                </div>
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_3.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Black Smartphone</span>
                                            <div  className="card-footer">
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_4.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Wired Headphone</span>
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_5.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Circular Speaker</span>
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
                            </div>
                        </div>
                        <div id="test4" className="test">
                            <div className="your-class featured__slide-tabs">
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_1.jpg" />
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
                                <div>
                                    <div className="card">
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
                                </div>
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_3.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Black Smartphone</span>
                                            <div  className="card-footer">
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_4.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Wired Headphone</span>
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_5.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Circular Speaker</span>
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
                            </div>
                        </div>
                        <div id="test0" className="test"> 
                            <div className="your-class featured__slide-tabs">
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_1.jpg" />
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
                                <div>
                                    <div className="card">
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
                                </div>
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_3.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Black Smartphone</span>
                                            <div  className="card-footer">
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_4.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Wired Headphone</span>
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
                                <div>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="image/gadget_5.jpg" />
                                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">shopping_cart</i></a>
                                            <span className="material-icons card-favorite">favorite </span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">Circular Speaker</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feature
