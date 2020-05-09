import React, {useEffect} from 'react'
import $ from "jquery"

function Brand() {

    useEffect( () => {
       
    });

    return (
        <div className="brand">
            <div className="contain-wrap brand__slide">
                <div className="slick-brand">
                    <div className="brand__item"><img src="image/brand_1.png" alt="" /></div>
                    <div className="brand__item"><img src="image/brand_2.png" alt="" /></div>
                    <div className="brand__item"><img src="image/brand_3.png" alt="" /></div>
                    <div className="brand__item"><img src="image/brand_1.png" alt="" /></div>
                    <div className="brand__item"><img src="image/brand_2.png" alt="" /></div>
                    <div className="brand__item"><img src="image/brand_3.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Brand
