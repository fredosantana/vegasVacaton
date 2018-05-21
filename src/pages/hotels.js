import React from 'react'
import Link from 'gatsby-link'
import Aria from '../layouts/images/aria.png'
import Dragon from '../layouts/images/dragon.png'
import Popeye from '../layouts/images/popeye.png'
import NewYork from '../layouts/images/ny.png'
import PlanetHw from '../layouts/images/ph.png'

const Hotels = () => (
  <div>
    <h2>Hotels</h2>
    <p>Staying at the Downtown Grand. Of course there are lots of hotels to visit.</p>
    <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/129/129974734.jpg" alt="Downtown Grand Las Vegas" />
    <img src={Aria} alt="Aria artwork"/>
    <img src={NewYork} alt="New York New York"/>
    <img src={PlanetHw} alt="Planet Hollywood"/>
    <img src={Dragon} alt="Wynn Dragon"/>
    <img src={Popeye} alt="Winn Popeye"/>

  </div>
)

export default Hotels
