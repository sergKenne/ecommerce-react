import React from 'react'

function Subscribe() {
    return (
        <div className="subscribe">
            <div className="contain-wrap subscribe__content">
                <div className="subscribe__item">
                    <h3 className="subscribe__title">Subscribe Our Newsletter</h3>
                    <p className="subscribe__text">Stay up to date with our latest new and products</p>
                </div>
                <div className="subscribe__item subscribe__item--form">
                    <form className="">
                        <div className="input-field subscribe__input">
                            <i className="material-icons prefix">send</i>
                            <input id="icon_telephone" type="tel" className="validate" />
                            <label htmlFor="icon_telephone" className="subscribe__label" autocomplete="off">Enter email Adress</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
