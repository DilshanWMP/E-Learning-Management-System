import React from 'react'
import MenuLink from '../MenuLink/MenuLink'
import './HeaderContent.css'
import Logoimage from '../../assets/CodeDot-Logo.png'

function HeaderContent() {
  return (
    <div className='navcontent'>
        <div>
            <img src={Logoimage} alt="Logo" className='logo'/>
        </div>
        <div>
            <MenuLink linkname="Home" url="/"/>
            <MenuLink linkname="All Courses" url="/allcourses"/>
            <MenuLink linkname="My Courses" url="/mycourses"/>
            {/* <MenuLink linkname="Login" url="#login"/> */}
            <button className='btnLogin-popup' href="#login">Login</button>
        </div>
    </div>
  )
}

export default HeaderContent