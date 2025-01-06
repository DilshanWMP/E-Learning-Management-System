import React from 'react'
import './MenuLink.css'

function MenuLink(props) {
  return (
    <a className='link' href={props.url}>{props.linkname}</a>
  )
}

export default MenuLink