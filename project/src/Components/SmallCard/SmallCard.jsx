import React from 'react'
import './SmallCard.css'

function SmallCard({imgSrc,title}) {
  return (
    <div className="smallcard">
        {imgSrc && <img src={imgSrc} className='smallcard-image'/>}
        {title && <h3 className='smallcard-title'>{title}</h3>}
    </div>
  )
}

export default SmallCard