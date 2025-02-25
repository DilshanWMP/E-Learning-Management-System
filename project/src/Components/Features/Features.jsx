import React from 'react'
import './Features.css'

function Features({imgSrc, title, subtitle, description, textColor = 'white',button, titlecolor='white'}) {
  return (
    <section className={`features ${imgSrc ? 'with-image' : 'no-image'}`}>
        <div className='text-content' style={{color:textColor}}>
            {title &&(<h2 style={{color:titlecolor}}>{title}</h2>)}
            {subtitle &&(<p className='subtitle'>{subtitle}</p>)}
            {description &&(<p className='description'>{description}</p>)}
            {button &&(<button className='btn-popup2'>{button}</button>)}
        </div>

        <div className="image-content">
            {imgSrc &&(<img src={imgSrc}/>)}
        </div>
    </section>
  )
}

export default Features