import React from 'react'
import './Card.css'

function Card({imgSrc, title, description, link, imgAlt, buttonText}) {
  return (
    <div className="card-container">
        <img src={imgSrc} alt={imgAlt} className='card-image'/>
        <h1 className='card-title'>{title}</h1>
        <p className='card-description'>{description}</p>
        <a href={link} className="card-btn">{buttonText}</a>
    </div>
  )
}

export default Card