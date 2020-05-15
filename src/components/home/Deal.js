import React, {useEffect} from 'react'
import $ from 'jquery'

function Deal() {

    useEffect(() => {

        $('.deal__tabs').click(function(event) {
            $('.deal__image').attr('src', event.target.src );
        });
      
    }, []);

    return (
        <div className="deal">
            <div className="contain-wrap deal__row">
                <div className="deal__column">
                    <img src="image/m1.jpg" alt="pic" className="deal__image" />
                </div>
                <div className="deal__column">
                    <h2 className="main-title deal__title">Deal of the day</h2>
                    <h5 className="deal__subtitle">Denim Pullover</h5>
                    <p className="deal__prices"><span className="deal__old-price">$ 42.75</span>Now Only $<span className="deal__new-price">36.00</span></p>
                    <p className="deal__text">Suspendisse porttitor ornare ligula. Nam massa erat, fermentum dolor quis, maximus ultrices
                        diam. Aenean pellentesque auctor elementum. Nunc vitae tortor iaculis,mollis odio at,
                        lacinia sapien. Mauris et leo sem. Curabitur sit amet enim nisi. Nunc placerat commodo sem,sed maximus purus
                    </p>
                    <p className="deal__time">
                        <span className="deal__counter">11</span>House<span className="deal__counter">50
                        </span>Minutes<span className="deal__counter">17</span>Seconds
                    </p>
                    <button className="btn btn-small deal__btn">shop now</button>
                    <div className="deal__tabs">
                        <div className="deal__item"><img src="image/m1.jpg" alt="" className="deal__tabs-image" /></div>
                        <div className="deal__item"><img src="image/m2.jpg" alt="" className="deal__tabs-image" /></div>
                        <div className="deal__item"><img src="image/m3.jpg" alt="" className="deal__tabs-image" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deal
