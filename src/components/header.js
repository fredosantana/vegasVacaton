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
      <ul style={{ listStyle: 'none', float: 'right', color: 'white', textDecoration: 'none' }}>
        <Link to="/hotels/" >Hotels</Link> |
        <Link to="/places/">Places</Link> |
        <Link to="/restaurants/">Restaurants</Link>
      </ul>
    </div>
  </div>
)

export default Header
