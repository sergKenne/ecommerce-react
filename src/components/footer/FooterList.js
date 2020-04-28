import React from 'react'

function FooterList({ footerItems, title }) {
    return (
        <ul className="footer__list">
            <h6 className="footer__title">{ title }</h6>
                {
                    footerItems.map( item => {
                        return(
                            <li className="footer__list-item" key={ item.menu_title}>
                                <a href={ item.path } className="footer__list-link">{ item.menu_title }</a>
                            </li>
                        )  
                    })
                }
        </ul>
    )
}

export default FooterList
