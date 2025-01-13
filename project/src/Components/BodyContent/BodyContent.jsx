import React from 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    <div className="body-content">  
      {props.children}
    </div>
  )
}

export default BodyContent