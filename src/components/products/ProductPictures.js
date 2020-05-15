import React, {useEffect} from 'react';
import $ from 'jquery'
import db from '../../assets/js/data/db'

function ProductPictures({id}) {

    useEffect(() => {

        $('.product__tabs-image').hover(function(event) {
            $('.product__image').attr('src',  event.target.src );
        });  
    },[id])

    const {img, tabs} = db.products.find( item => item.id === parseInt(id))
   
    return (
        <div className="product__column product__column--tabs">
            <ul className="product__tabs">
                {
                    tabs.map( tab => { 
                        return (
                            <li className="product__tabs-item" key={tab}>
                                <img src={`../../${tab}`} alt="" className="product__tabs-image" />
                            </li> 
                        )
                    })
                }
            </ul>
            <div className="product__big-image">
                <img src={`../../${img}`}  alt="" className="product__image" />
            </div>
        </div>
    )
}

export default ProductPictures
