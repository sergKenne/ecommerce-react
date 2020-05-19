import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

function Deal() {

    const [hour, setHour] = useState(20);
    const [minute, setMinute] = useState(60)
    const [second, setSecond] = useState(60)
    useEffect(() => {
        var countDate = new Date('jan 1, 2021 00:00:00').getTime();

        function newYear() {
            var now = new Date().getTime();
            var gap =countDate - now;
            var second = 1000;
            var minute = second * 60;
            var hour = minute * 60;
            var day = hour * 24;

            //var d = Math.floor(gap / (day));
            var h = Math.floor((gap % (day)) / (hour));
            var m = Math.floor((gap % (hour)) / (minute));
            var s = Math.floor((gap % (minute)) / second);

            setHour(h);
            setMinute(m)
            setSecond(s);
        }

        var timer = setInterval(function(){
            newYear();
        }, 1000)

        $('.deal__tabs').click(function(event) {
            $('.deal__image').attr('src', event.target.src );
        });

        return () => {
            clearInterval(timer)
        }
      
    }, []);

    return (
        <div className="deal">
            <div className="contain-wrap deal__row">
                <div className="deal__column">
                    <img src="image/m3.jpg" alt="pic" className="deal__image" />
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
                        <span className="deal__counter">{hour}</span>Hours
                        <span className="deal__counter">{minute}</span>Minutes
                        <span className="deal__counter">{second}</span>Seconds
                    </p>
                    <Link to="/shop" className="btn btn-small deal__btn">shop now</Link>
                    <div className="deal__tabs">
                        <div className="deal__item"><img src="image/m1.jpg" alt="deal" className="deal__tabs-image" /></div>
                        <div className="deal__item"><img src="image/m2.jpg" alt="deal" className="deal__tabs-image" /></div>
                        <div className="deal__item"><img src="image/m3.jpg" alt="deal" className="deal__tabs-image" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deal
