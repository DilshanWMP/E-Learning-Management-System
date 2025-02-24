import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import icon1 from './assets/SmallCardIcons/icon-1.png'
import icon2 from './assets/SmallCardIcons/icon-2.png'
import icon3 from './assets/SmallCardIcons/icon-3.png'
import icon4 from './assets/SmallCardIcons/icon-4.png'
import SmallCard from './Components/SmallCard/SmallCard'
import Features from './Components/Features/Features'
import image1 from '../src/assets/Features/image1.jpg'

function App() {

  return (
    <>   
      <HeaderContent/>
      <BodyContent>
        <section className='bgimage'>
          <div className='content' style={{alignItems:'flex-end'}}>
            <h1>Bring your <br/>goals<span style={{ color: '#DF8AA3' }}> into <br/>focus</span></h1>
            <br/>
            <p style={{textAlign: 'right'}}>CodeDot offers online courses and programs<br/> that prepare you for every career moment</p>
          </div>
        </section>

        <div className="content">
          <h3>Popular topics</h3>
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
        
        <div className="content" style={{backgroundColor: '#123c32', padding: '0px 100px'}}>
          <Features
            imgSrc={image1}
            title='Empower every member of your team'
            subtitle='Discover CodeDot Enterprise Subscriptions'
            discription='Give your employees unlimited access to courses and certificate programs in topics like AI, sustainability, and leadership.'
          />
        </div>

      </BodyContent>    
    </>
  )
}

export default App