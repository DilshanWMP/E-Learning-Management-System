import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import icon1 from './assets/SmallCardIcons/icon-1.png'
import icon2 from './assets/SmallCardIcons/icon-2.png'
import icon3 from './assets/SmallCardIcons/icon-3.png'
import icon4 from './assets/SmallCardIcons/icon-4.png'
import SmallCard from './Components/SmallCard/SmallCard'
function App() {

  return (
    <>   
      <HeaderContent/>
      <BodyContent>
        <section className='bgimage'>
          <div className='content' style={{alignItems:'flex-end'}}>
            <h1>Bring your <br/>goals<span style={{ color: '#DF8AA3' }}> into <br/>focus</span></h1>
            <br/>
            <p>CodeDot offers online courses and programs that prepare you for every career moment</p>
          </div>
        </section>

        <div className="content">
          <h2>Popular topics</h2>
        </div>
        <div className="container">
          <SmallCard
            imgSrc={icon1}
            title='Artificial Intelligence'
          />

          <SmallCard
            imgSrc={icon2}
            title='Computer Programming'
          />
          <SmallCard
            imgSrc={icon3}
            title='Machine Learning'
          />

          <SmallCard
            imgSrc={icon4}
            title='Statistics'
          />
        </div>
        
      </BodyContent>    
    </>
  )
}

export default App