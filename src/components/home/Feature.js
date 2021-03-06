import React, { Component } from 'react';
import TabsSlide from './TabsSlide'

class Feature extends Component {

    render() {
        return (
            <div className="featured">
                <div className="contain-wrap">
                    <h2 className="main-title featured__title">feature products</h2>
                    <div className="featured__tabs">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab"><span className="taBtn tab1 active" id="tab1">accessories</span></li>
                            <li className="tab"><span className="taBtn tab2"  id="tab2">gadgets</span></li>
                            <li className="tab"><span className="taBtn tab3" id="tab3">men</span></li>
                            <li className="tab"><span className="taBtn tab4" id="tab4">women</span></li>
                        </ul>

                        <div className="test test1">
                            <TabsSlide productType="accessories" />
                        </div>
                        <div className="test test2">
                            <TabsSlide productType="gadgets" />
                        </div>
                        <div className="test test3">
                            <TabsSlide productType="men" />
                        </div>
                        <div className="test test4"> 
                            <TabsSlide productType="women" />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Feature
