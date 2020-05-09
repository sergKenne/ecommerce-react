import React, {useState} from 'react';
import CardCategory from './CardCategory'
import db from '../../assets/js/data/db'


const CategoriesProducts = () => {

const [productsCategory, setProducts] = useState(db.electronic);

const itemByPage = 9;
const numberOfPage = Math.ceil(productsCategory.length/itemByPage);

const numberPagination = [];
for(let i=0; i<numberOfPage; i++) {
    numberPagination[i] = i+1
}

console.log(numberPagination);


    return (
        <div class="categories__inner">
            <div class="categories__top">
                <select class="categories__select-item">
                    <option value=""  selected>Features</option>
                    <option value="1">Lowest Price</option>
                    <option value="2">Highest Price</option>
                </select>
                <div class="categories__result-item"><span>2 388</span> results found</div>
            </div>
            <div class="categories__items">
                <div class="similar-product__item">
                    {
                        productsCategory.map(item => {
                            return <CardCategory card={item}/>
                        })
                    }
                </div>
            </div>
            <div class="categories__paganation">
                <ul class="pagination">
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                    {
                        numberPagination.map(elt => {
                            return (
                                <li class="waves-effect"><a href="#">{elt}</a></li>
                            )
                        })
                    }
                    {/* <li class="active"><a href="#!">1</a></li> */}
                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default CategoriesProducts
