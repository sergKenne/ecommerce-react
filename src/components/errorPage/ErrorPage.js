import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error">
            <div className="contain-wrap error__inner">
                <div className="card error__card">
                    <h1 className="error__title">404</h1>
                    <h6 className="error__text">We can’t seem to find the page you’re looking for.</h6>
                    <Link to="/" className="btn btn-small error__btn">Go To Home</Link>
                </div>
            </div>
        </div>
        
    )
}

export default ErrorPage;
