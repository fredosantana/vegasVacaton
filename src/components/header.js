import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'pink',
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
