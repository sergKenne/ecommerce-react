import React from 'react'

function Blog() {
    return (
        <div className="blog">
            <div className="contain-wrap">
                <h2 className="main-title blog__title">Latest From Blogs</h2>
                <div className="blog__content">
                    <div className="card blog__card">
                        <div className="card-image">
                            <img src="image/blog_1.jpg" />
                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">link</i></a>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Here Are Some Of Best Online Shopping Sites For You In Europe.</span>
                            <p className="blog__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                 has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book.
                            </p>
                            <div className="blog__footer">
                                <span className="blog__date"><span className="material-icons  blog__icon">person</span>by admin</span>
                                <span className="blog__date"><i className="material-icons blog__icon">calendar_today</i>jan 12/12 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="card blog__card">
                        <div className="card-image">
                            <img src="image/blog_2.jpg" />
                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">link</i></a>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Here Are Some Of Best Online Shopping Sites For You In Europe.</span>
                            <p className="blog__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                 has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book.
                            </p>
                            <div className="blog__footer">
                                <span className="blog__date"><span className="material-icons blog__icon">person</span>by admin</span>
                                <span className="blog__date"><i className="material-icons blog__icon">calendar_today</i>jan 12/12 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="card blog__card">
                        <div className="card-image">
                            <img src="image/blog_3.jpg" />
                            <a className="btn-floating halfway-fab waves-effect waves-light btn-large red"><i className="material-icons">link</i></a>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Here Are Some Of Best Online Shopping Sites For You In Europe.</span>
                            <p className="blog__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                 has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book.
                            </p>
                            <div className="blog__footer">
                                <span className="blog__date"><span className="material-icons blog__icon">person</span>by admin</span>
                                <span className="blog__date"><i className="material-icons blog__icon">calendar_today</i>jan 12/12 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
