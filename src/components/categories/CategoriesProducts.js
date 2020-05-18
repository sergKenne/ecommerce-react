import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import CardCategory from './CardCategory'
import db from '../../assets/js/data/db'
import {lowest} from '../../action/lowest';
import {highest} from '../../action/highest'
import $ from 'jquery'

const CategoriesProducts = ({dataSort, sortLowest, sortHighest }) => {

    const [sort, setSort] = useState(false)

    const itemByPage = 9; 
    const numberOfPage = Math.ceil(dataSort.length/itemByPage);   
    var trimStart = 0;
    var trimEnd = itemByPage;

    const [productsCategory , setProductsCategory ] = useState(dataSort.slice(trimStart, trimEnd));

    const handleSortProduct = (e) => {
        if(e.target.value === "lowest") {
            sortLowest();
            setSort(!sort)
        }

        if(e.target.value === "highest") {
           sortHighest();
           setSort(!sort)
        }
    }
   
    const numberPagination = [];
    for(let i=0; i<numberOfPage; i++) {
        numberPagination[i] = i+1
    }

    const handleChangePage = (ind) => {
        trimStart = (ind-1)*itemByPage;
        trimEnd = trimStart+itemByPage;
        setProductsCategory(dataSort.slice(trimStart, trimEnd ));
    }

    useEffect(() => {
        $(".pag").click(function(){
            $(".pag").removeClass("active");
            $(this).addClass("active");
        })
    })

    useEffect(() => {
        setProductsCategory(dataSort.slice(trimStart, trimEnd ));
    },[sort])

    return (
        <div className="categories__inner">
            <div className="categories__top">
                <select className="categories__select-item" onChange={handleSortProduct}>
                    <option value="" >Features</option>
                    <option value="lowest">Lowest Price</option>
                    <option value="highest">Highest Price</option>
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

const mapStateToProps = (state) => ({
    dataSort: state.dataSort
})

const mapDispatchToProps = (dispatch) => ({
    sortLowest: () => dispatch(lowest()),
    sortHighest: () => dispatch(highest())
})

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesProducts)
