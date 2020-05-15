import React, {useEffect} from 'react'
import CategoriesAside from './CategoriesAside'
import CategoriesProducts from './CategoriesProducts'
import M from "materialize-css/dist/js/materialize.min.js";

const Categories = () => {

    useEffect(() => {
        var elems = document.querySelectorAll("select");
        M.FormSelect.init(elems, {});
    })

    return (
        <div className="categories">
            <div className="contain-wrap categories__row">
                <CategoriesAside/>
                <CategoriesProducts/>
            </div>
        </div>
    )
}

export default Categories;