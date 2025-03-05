import React, { useState } from 'react';
import './App.css'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import LoginRegister from './Components/LoginRegister/LoginRegister'
import icon1 from './assets/SmallCardIcons/icon-1.png'
import icon2 from './assets/SmallCardIcons/icon-2.png'
import icon3 from './assets/SmallCardIcons/icon-3.png'
import icon4 from './assets/SmallCardIcons/icon-4.png'
import SmallCard from './Components/SmallCard/SmallCard'
import Features from './Components/Features/Features'
import image1 from '../src/assets/Features/image1.jpg'
import image2 from '../src/assets/Features/image2.jpg'

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>   
      <HeaderContent toggleLoginModal={toggleLoginModal} />
      <BodyContent>

       {showLoginModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <LoginRegister />
              <button
                className="close-modal"
                onClick={toggleLoginModal}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <section className='bgimage'>
          <div className='content' style={{alignItems:'flex-end'}}>
            <h1 style={{color:'white'}}>Bring your <br/>goals<span style={{ color: '#DF8AA3' }}> into <br/>focus</span></h1>
            <br/>
            <p style={{textAlign: 'right', color:'white'}}>CodeDot offers online courses and programs<br/> that prepare you for every career moment</p>
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
        
        <div className="content" style={{ padding: '0px 100px', background: 'linear-gradient(to top right, rgba(10, 37, 42, 1), rgba(10, 37, 42, 0.83))' }}>
          <Features
            imgSrc={image1}
            title='Empower every member of your team'
            subtitle='Discover CodeDot Enterprise Subscriptions'
            description='Give your employees unlimited access to courses and certificate programs in topics like AI, sustainability, and leadership.'
            textColor='white'
            button='Discover enterprise solutions'
          />
        </div>

        <div className="content" style={{backgroundColor: 'white', padding: '0px 100px'}}>
          <Features
            imgSrc={image2}
            title='Join a community, not just a classroom'
            titlecolor='#123c32'
            description='With CodeDot, you can expect the kinds of benefits that set you up for long-term professional and personal growth'
            textColor='black'
          />
        </div>

        <div className="content centered-text" style={{backgroundColor: '#0a252a', padding: '0px 100px', display:'flex', alignItems:'center'}}>
          <Features
            title='Register for a free account'
            description='Sign up now.'
            textColor='white'
            button='Get started'
          />
        </div>

      </BodyContent>    

    </>
  )
}

export default App