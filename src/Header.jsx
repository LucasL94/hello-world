import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const style = {
  color: 'grey',
}

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <img src="/images/GL.png" alt="Main"/>
            </Link>
          </li>
          <li>
            <NavLink activeStyle={style} to='/books'>Books</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header