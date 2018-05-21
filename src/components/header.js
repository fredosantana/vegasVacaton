import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#005AA7',  /* fallback for old browsers */
      background: '-webkit-linear-gradient(to top, #FFFDE4, #005AA7)',  /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to top, #FFFDE4, #005AA7)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: 'none', float: 'right'}}>
        <li>
          <Link to="/hotels/" style={{ color: 'blue', textDecorationLine: 'none'}} >Hotels</Link> |
          <Link to="/places/"style={{ color: 'blue', textDecorationLine: 'none'}} > Places</Link> |
          <Link to="/restaurants/" style={{ color: 'blue', textDecorationLine: 'none'}}> Restaurants</Link> | 
          <Link to="/blog/" style={{ color: 'blue', textDecorationLine: 'none'}}> Blog</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
