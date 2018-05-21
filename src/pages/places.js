import React from 'react'
import Link from 'gatsby-link'
import CPark from '../layouts/images/cpark.png'
import MGM from '../layouts/images/mgm.png'
import Vegas from '../layouts/images/vlandscape.png'

const Places = () => (
  <div>
    <h2>Places we want to go</h2>
    <p>This area will have various attractions we are planning to go to.</p>
    <img src="https://www.canyontours.com/wp-content/uploads/2015/01/hoover-dam-bypass-bridge-tour.jpg" alt="Hoover Dam" />
    <img src={CPark} alt="Container Park"/>
    <img src={MGM} alt="MGM Grand"/>
    <img src={Vegas} alt="Vegas Landscape"/>
  </div>
)

export default Places
