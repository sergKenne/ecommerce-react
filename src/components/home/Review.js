import React from 'react';
import reviewData from '../../assets/js/data/reviewData';

function Review() {
    return (
        <div className="review">
            <div className="contain-wrap">
                <h2 className="main-title review__title">{ reviewData.reviewTitle }</h2>
                <div className="review__slide">
                    <div className="slick-review">
                        {
                            reviewData.reviewPost.map( post => {
                                return (
                                    <div className="review__item" key={post.id}>
                                        <div className="review__description">{ post.description }</div>
                                        <div className="review__body">
                                            <img src={ post.image } alt={post.name} className="review__image" />
                                            <h6 className="review__name">{ post.name }</h6>
                                            <p className="review__text">{ post.text }</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
