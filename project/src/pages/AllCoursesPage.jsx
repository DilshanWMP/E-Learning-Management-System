import React, { useState } from 'react';
import '../App.css'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import BodyContent from '../Components/BodyContent/BodyContent'
import Card from '../Components/Card/Card'
import Placeholder from '../assets/Courses/python1.jpg'  
import LoginRegister from '../Components/LoginRegister/LoginRegister';


function AllCoursesPage() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  
    const toggleLoginModal = () => {
      setShowLoginModal(!showLoginModal);
    };

  return (
    <>
      <div id="wrapper">
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

          <div className="content">
            <h3>All Courses</h3>
          </div>
          <div className="container">
            <Card
              imgSrc= {Placeholder}
              imgAlt='Placeholder Image'
              title='Python Programming for Beginners | Lifetime'
              description='Everything you need to know about Python, become '
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc={Placeholder}
              imgAlt='Placeholder Image'
              title='Python Web Programming | Lifetime'
              description='Learn Python from Zero to Developing the Professional'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc={Placeholder}
              imgAlt='Placeholder Image'
              title='Python Game Development - Create a Flappy Bird Clone | Lifetime'
              description='Become a Professional Game Developer'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc={Placeholder}
              imgAlt='Placeholder Image'
              title='PHP Programming for Absolute Beginner | Lifetime'
              description='Learn the basics of PHP programming. No prior'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc={Placeholder}
              imgAlt='Placeholder Image'
              title='(1) The Ultimate Password Hacking / Cracking Training'
              description='Everything you need to know about password'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc={Placeholder}
              imgAlt='Placeholder Image'
              title='Ruby On Rails for Absolute Beginners | Lifetime'
              description='Get started with Ruby on Rails in a flash. The Must'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc={Placeholder}
              imgAlt='Placeholder Image'
              title='(1) The Ultimate Password Hacking / Cracking Training'
              description='Everything you need to know about password'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc={Placeholder}
              imgAlt='Placeholder Image'
              title='Ruby On Rails for Absolute Beginners | Lifetime'
              description='Get started with Ruby on Rails in a flash. The Must'
              link='/'
              buttonText='View Course'
            />
          </div>
          
        </BodyContent>
      </div>
    </>
  )
}

export default AllCoursesPage