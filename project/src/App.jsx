import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'

function App() {

  return (
    <>
      <div id="wrapper">
        <HeaderContent/>
        <BodyContent/>
      </div>
    </>
  )
}

export default App
