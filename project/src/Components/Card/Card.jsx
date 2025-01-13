import React from 'react'
import './Card.css'


function Card({imgSrc, title, description, link, imgAlt, buttonText}) {
  return (
    <div className="card">
        {imgSrc && imgAlt&& (<img src={imgSrc} alt={imgAlt} className='card-image'/>)}
        {title && <h1 className='card-title'>{title}</h1>}
        {description && <p className='card-description'>{description}</p>}
        {buttonText && link && (<a href={link} className="card-btn">{buttonText}</a>)}
    </div>
  )
}

export default Card