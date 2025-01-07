import React from 'react'
import bgimage from '../../assets/bg-image.jpg'
import './BodyContent.css'

function BodyContent() {
  return (
    <section className='bgimage'>
      <div className='content'>
        <h1>Bring your <br/>goals<span style={{ color: '#DBCDF0' }}> into <br/>focus</span></h1>
        <br/>
        <p>CodeDot offers online courses and programs that prepare you for every career moment</p>
      </div>
    </section>
  )
}

export default BodyContent