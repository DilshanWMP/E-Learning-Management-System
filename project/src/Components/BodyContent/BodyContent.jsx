import React from 'react'
import './BodyContent.css'

function BodyContent(props) {
  return (
    <div>  
      {props.children}
    </div>
  )
}

export default BodyContent