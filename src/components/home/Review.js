import React from 'react'

function Review() {
    return (
        <div className="review">
            <div className="contain-wrap">
                <h2 className="main-title review__title">Customer Reviews</h2>
                <div className="review__slide">
                    <div className="slick-review">
                        <div className="review__item">
                            <div className="review__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate, sed delectus</div>
                            <div className="review__body">
                                <img src="image/review_1.jpg" alt="" className="review__image" />
                                <h6 className="review__name">James Hamm</h6>
                                <p className="review__text">CEO , Dellec Info</p>
                            </div>
                        </div>
                        <div  className="review__item">
                            <div className="review__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate, sed delectus</div>
                            <div className="review__body">
                                <img src="image/review_2.jpg" alt="" className="review__image" />
                                <h6 className="review__name">James Hamm</h6>
                                <p className="review__text">CEO , Dellec Info</p>
                            </div>
                        </div>
                        <div  className="review__item">
                            <div className="review__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate, sed delectus</div>
                            <div className="review__body">
                                <img src="image/review_3.jpg" alt="" className="review__image" />
                                <h6 className="review__name">James Hamm</h6>
                                <p className="review__text">CEO , Dellec Info</p>
                            </div>
                        </div>
                        <div  className="review__item">
                            <div className="review__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate, sed delectus</div>
                            <div className="review__body">
                                <img src="image/review_4.jpg" alt="" className="review__image" />
                                <h6 className="review__name">James Hamm</h6>
                                <p className="review__text">CEO , Dellec Info</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
