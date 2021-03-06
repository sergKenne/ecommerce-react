import React, {useEffect} from 'react';
import Showcase from './Showcase';
import Pub from './Pub';
import Feature from './Feature';
import Deal from './Deal'
import BestDeal from './BestDeal';
import NewArrivals from './NewArrivals';
import Review from './Review';
import Blog from './Blog';
import Subscribe from './Subscribe'
import Brand from './Brand';
import {configSlider} from '../../assets/js/configSlider'

function Home() {
  useEffect(() => {
    configSlider();
  },[])

  return (
      <div>
          <Showcase/>
          <Pub />
          <Feature/>
          <Deal />
          <BestDeal />
          <NewArrivals/>
          <Review />
          <Blog/>
          <Subscribe/>
          <Brand/>
      </div>
  )
}

export default Home
