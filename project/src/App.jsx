import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'

function App() {

  return (
    <>
      <div id="wrapper">
        <HeaderContent/>
        <BodyContent>
          <section className='bgimage'>
            <div className='content'>
              <h1>Bring your <br/>goals<span style={{ color: '#DF8AA3' }}> into <br/>focus</span></h1>
              <br/>
              <p>CodeDot offers online courses and programs that prepare you for every career moment</p>
            </div>
          </section>
        </BodyContent>
      </div>
    </>
  )
}

export default App
