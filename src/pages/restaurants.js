import React from 'react'
import Link from 'gatsby-link'
import HAGrill from '../layouts/images/hagrill.png'
import Buffet from '../layouts/images/buffet.png'
import WhiteCastle from '../layouts/images/wc.png'
import Seafood from '../layouts/images/seafood.png'

const Restaurants = () => (
  <div>
    <h2>Restaurants</h2>
    <p>From equisite cuisine to junk food galore, Vegas has your food needs covered</p>
    <img src={HAGrill} alt="Heart Attack Grill" />
    <img src={Buffet} alt="Buffet" />
    <img src={WhiteCastle} alt="White Castle" />
    <img src={Seafood} alt="Seafood" />
  </div>
)

export default Restaurants
