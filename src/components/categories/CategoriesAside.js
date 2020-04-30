import React from 'react'

const CategoriesAside = () => {
    return (
        <div className="categories__aside">
            <div className="card categories__aside-card">
                <div className="card-content categories__aside-content">
                    <input placeholder="search Products" type="text" className="validate"/>
                </div>
            </div>
            <div className="card categories__aside-card">
                <div className="card-content categories__aside-content">
                    <span className="card-title categories__aside-title">Brand</span>
                    <input placeholder="search Products" type="text" className="validate"/>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Samsung <span className=" badge grey">45</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" checked="checked"/>
                            <span>HP <span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Metra <span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Apple <span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" checked="checked"/>
                            <span>Insignia<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="card categories__aside-card">
                <div className="card-content categories__aside-content">
                    <span className="card-title categories__aside-title">Type</span>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Ink cartridges<span className=" badge grey">45</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" checked="checked"/>
                            <span>Dask Kit<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Toners<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Deck harness<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" checked="checked" />
                            <span>French door refrig<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="card categories__aside-card">
                <div className="card-content categories__aside-content">
                    <span className="card-title categories__aside-title">Category</span>
                    <input placeholder="search Here" type="text" className="validate"/>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" />
                            <span>Car Electronis & GPS<span className=" badge grey">45</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" checked="checked" />
                            <span>Deck Installation Parts<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" />
                            <span>Dash Installation Kits<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in"  />
                            <span>Office & School Supplies<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                    <p className="categories__checked">
                        <label>
                            <input type="checkbox" className="filled-in" checked="checked"/>
                            <span>Printer Ink & Toner<span className=" badge grey">445</span></span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="card categories__aside-card">
                <div className="card-content categories__aside-content">
                    <span className="card-title categories__aside-title">Price</span>
                    <input placeholder="search Here" type="text" className="validate"/>
                    <p  className="categories__checked">
                        <label>
                            <input className="with-gap" name="group1" type="radio"/>
                            <span>Below $10</span>
                        </label>
                    </p>
                    <p  className="categories__checked">
                        <label>
                            <input className="with-gap" name="group1" type="radio"/>
                            <span>$10 - $100</span>
                        </label>
                    </p>
                    <p  className="categories__checked">
                        <label>
                            <input className="with-gap" name="group1" type="radio"  />
                            <span>$100 - $500</span>
                        </label>
                    </p>
                    <p  className="categories__checked">
                        <label>
                            <input className="with-gap" name="group1" type="radio"  />
                            <span>Above $500</span>
                        </label>
                    </p>
                    <p  className="categories__checked">
                        <label>
                            <input className="with-gap" name="group1" type="radio"  />
                            <span>All</span>
                        </label>
                    </p>
                    <span className="card-title categories__aside-title">Enter Price Range</span>
                    <div className="categories__footer">
                        <input placeholder="9" type="number" className="validate categories__footer-input"/>
                        <span className="material-icons categories__footer-icon">remove</span>
                        <input placeholder="5000" type="number" className="validate categories__footer-input"/>
                        <button  className="btn btn-small">Go</button>
                    </div>
                </div>
            </div>
            <div className="card categories__aside-card">
                <div className="card-content categories__aside-content">
                    <span className="card-title categories__aside-title">Rating Menu</span>
                    <p className="categories__checked categories__checked--rading">
                        <span className="card-rating">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                        </span>
                        <span className=" badge grey">45</span>
                    </p>
                    <p className="categories__checked categories__checked--rading">
                        <span className="card-rating">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star_half</span>
                            <span className="material-icons">star_half</span>
                        </span>
                        <span className=" badge grey">45</span>
                    </p>
                    <p className="categories__checked categories__checked--rading">
                        <span className="card-rating">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star_half</span>
                            <span className="material-icons empty">star</span> 
                        </span>
                        <span className=" badge grey">45</span>
                    </p>
                    <p className="categories__checked categories__checked--rading">
                        <span className="card-rating">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star_half</span>
                            <span className="material-icons empty">star</span> 
                        </span>
                        <span className=" badge grey">45</span>
                    </p>
                    <p className="categories__checked categories__checked--rading">
                        <span className="card-rating">
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star</span>
                            <span className="material-icons">star_half</span>
                            <span className="material-icons empty">star</span> 
                        </span>
                        <span className=" badge grey">45</span>
                    </p>
                </div>
            </div>
            <div className="card categories__aside-card">
                <div className="card-content ">
                    <button  className="btn btn-small">Clear all filters</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesAside
