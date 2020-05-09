import React from 'react'

const Banner = ({ title }) => {
    return (
        <div className="shop__banner">
            <div className="contain-wrap">
                <h1 className="main-title shop__main-title">{ title }</h1>
                {/* <p className="main-title shop__main-text">{ text }</p> */}
            </div>
        </div>
    )
}

export default Banner
