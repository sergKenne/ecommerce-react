import React from 'react';
import Showcase from './Showcase';
import Pub from './Pub';
//import Feature from './Feature';
import Deal from './Deal'
import BestDeal from './BestDeal';
import Review from './Review';
import Blog from './Blog';
import Subscribe from './Subscribe'
import Brand from './Brand';

function Home() {
    return (
        <div>
            <Showcase/>
            <Pub />
            <Deal />
            <BestDeal />
            <Review />
            <Blog/>
            <Subscribe/>
            <Brand/>
        </div>
    )
}

export default Home