import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-87b24b41">
      <div className="leftSide">
        <Link to="/home">Home</Link>
        <div>Boards</div>
        <div>Search</div>
      </div>
      <span className="logo">Trelolo React</span>
      <div className="rightSide">
        <div>Plus</div>
        <div>Plus</div>
        <div>Plus</div>
      </div>
    </div>
  )
}

export default Navbar