import React, { Component } from 'react';
//import M from 'materialize-css/dist/js/materialize.min.js';
import TabsSlide from './TabsSlide';



class NewArrivals extends Component {

    // componentDidMount() {
    //     var elem = document.querySelector('.tabs-2');
    //     var options = {duration:50}
    //     var instance = M.Tabs.init(elem, options);
    // }
    
    render() {

        return (
            <div className="featured">
                <div className="contain-wrap">
                    <h2 className="main-title featured__title">New Arrivals</h2>
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

export default NewArrivals