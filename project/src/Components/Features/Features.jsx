import React from 'react'
import './Features.css'

function Features({imgSrc, title, subtitle, discription}) {
  return (
    <section className="features">
        <div className='text-content'>
            {title &&(<h2 style={{color:'white'}}>{title}</h2>)}
            {subtitle &&(<p className='subtitle'>{subtitle}</p>)}
            {subtitle &&(<p className='description'>{discription}</p>)}
            <button className='btn-popup2'>Discover enterprise solutions</button>
        </div>

        <div className="image-content">
            {imgSrc &&(<img src={imgSrc}/>)}
        </div>
    </section>
  )
}

export default Features