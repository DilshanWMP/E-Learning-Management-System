import React from 'react'
import MenuLink from '../MenuLink/MenuLink'
import './HeaderContent.css'

function HeaderContent() {
  return (
    <div className='navcontent'>
        <a href='#'>Logo</a>
        <div>
            <MenuLink linkname="Home" url="#home"/>
            <MenuLink linkname="About" url="#about"/>
            <MenuLink linkname="Contact" url="#contact"/>
            <MenuLink linkname="Login" url="#login"/>
        </div>
    </div>
  )
}

export default HeaderContent