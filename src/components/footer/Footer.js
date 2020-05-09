import React from 'react'

//import cartImg from '../../assets/image/cart.png'
import footerData from '../../assets/js/data/footerData';
import FooterList from './FooterList'
import FooterDescription from './FooterDescription';

function Footer() {
   
    return (
        <div className="footer">
            <div className="contain-wrap">
                <div className="footer__content">
                    <FooterDescription/>
                    <div className="footer__item footer__item--list">
                        <FooterList footerItems={footerData.about} title="about" />
                        <FooterList footerItems={footerData.session} title="session" />
                        <FooterList footerItems={footerData.categories} title="categories" />
                        <FooterList footerItems={footerData.social} title="social" />
                    </div>
                </div>
                <div className="footer__copyright">
                    <img src="image/cart.png" alt="cart" className="footer__cart" />
                    <p className="footer__text footer__text--copyright">© All Rights Reversed | Made With Love by SERGE KENNE for better Web</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
