import React from 'react'
import MenuLink from '../MenuLink/MenuLink'
import './HeaderContent.css'
import Logoimage from '../../assets/CodeDot-Logo.png'

function HeaderContent() {
  return (
    <nav>
      <div className='navcontent'>   
          <img src={Logoimage} alt="Logo" className='logo'/>
          <div>
              <MenuLink linkname="Home" url="/"/>
              <MenuLink linkname="All Courses" url="/allcourses"/>
              <MenuLink linkname="My Courses" url="/mycourses"/>
              {/* <MenuLink linkname="Login" url="#login"/> */}
              <button className='btnLogin-popup' href="#login">Login</button>
          </div>
      </div>
    </nav>
  )
}

export default HeaderContent