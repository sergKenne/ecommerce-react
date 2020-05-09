import React from 'react';
import CartItem from './CartItem';
import db from '../../assets/js/data/db';

const TabsSlide = ({ productType }) => {

    return (
        <div className="your-class featured__slide-tabs">
            {
                db.products.map( item => item.type === productType && <CartItem cartElt={item} key={item.id}/> ) 
            }     
        </div>


        // <div class="owl-carousel owl-theme featured__slide-tabs">
        //     {
        //         db.products.map( item => item.type === productType && <CartItem cartElt={item} key={item.id}/> ) 
        //     }  
        // </div>




    )
}

export default TabsSlide
