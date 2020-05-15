import React, {useState, useEffect} from 'react';
import CardCategory from './CardCategory'
import db from '../../assets/js/data/db'
import $ from 'jquery'

const CategoriesProducts = () => {

    const itemByPage = 9; 
    const numberOfPage = Math.ceil(db.electronic.length/itemByPage);   
    //var page = 1;
    var trimStart = 0;
    var trimEnd = itemByPage;
   
    const [productsCategory , setProductsCategory ] = useState(db.electronic.slice(trimStart, trimEnd));
   

    const numberPagination = [];
    for(let i=0; i<numberOfPage; i++) {
        numberPagination[i] = i+1
    }

    const handleChangePage = (ind) => {

        trimStart = (ind-1)*itemByPage;
        trimEnd = trimStart+itemByPage;
        // startIndex = (itemByPage*ind-itemByPage) - itemByPage*ind ;
        // endIndex = itemByPage*ind;
        setProductsCategory(db.electronic.slice(trimStart, trimEnd ));

    }

    useEffect(() => {

        $(".pag").click(function(){
            $(".pag").removeClass("active");
            $(this).addClass("active");
        })
    })


    return (
        <div className="categories__inner">
            <div className="categories__top">
                <select className="categories__select-item">
                    <option value="" >Features</option>
                    <option value="1">Lowest Price</option>
                    <option value="2">Highest Price</option>
                </select>
                <div className="categories__result-item"><span>2 388</span> results found</div>
            </div>
            <div className="categories__items">
                <div className="similar-product__item">
                    {
                        productsCategory.map(item => {
                            return <CardCategory card={item} key={item.id}/>
                        })
                    }
                </div>
            </div>
            <div className="categories__pagination">
                <ul className="pagination">
                    <li className="disabled"><a href="#"><i className="material-icons">chevron_left</i></a></li>
                    {
                        numberPagination.map( elt => {
                            return (
                                <li className={ elt === 1 ? "waves-effect active pag" : "waves-effect pag"} key={elt}>
                                    <span onClick={() => handleChangePage(elt) }>{elt}</span>
                                </li>
                            )
                        })
                    }
                    {/* <li className="active"><a href="#!">1</a></li> */}
                    <li className="waves-effect"><a href="#"><i className="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default CategoriesProducts
