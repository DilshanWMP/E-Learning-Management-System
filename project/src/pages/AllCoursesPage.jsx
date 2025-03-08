import React, { useState } from 'react';
import '../App.css'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import BodyContent from '../Components/BodyContent/BodyContent'
import Card from '../Components/Card/Card'
import LoginRegister from '../Components/LoginRegister/LoginRegister';
import Placeholder1 from '../assets/Courses/python1.jpg'  
import Placeholder2 from '../assets/Courses/python2.jpg'  
import Placeholder3 from '../assets/Courses/python3.webp'  
import Placeholder4 from '../assets/Courses/php1.jpg'  
import Placeholder5 from '../assets/Courses/passwordHacking.jpg' 
import Placeholder6 from '../assets/Courses/Rails.png' 
import Placeholder7 from '../assets/Courses/perl.jpg' 
import Placeholder8 from '../assets/Courses/Scratch.webp' 
import Placeholder9 from '../assets/Courses/html1.jpg' 
import Placeholder10 from '../assets/Courses/html2.jpg' 
import Placeholder11 from '../assets/Courses/html3.jpg' 
import Placeholder12 from '../assets/Courses/html4.jpg' 

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
              imgSrc= {Placeholder1}
              imgAlt='Placeholder Image'
              title='Python Programming for Beginners | Lifetime'
              description='Everything you need to know about Python, become '
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder2}
              imgAlt='Placeholder Image'
              title='Python Web Programming | Lifetime'
              description='Learn Python from Zero to Developing the Professional'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder3}
              imgAlt='Placeholder Image'
              title='Python Game Development - Create a Flappy Bird Clone | Lifetime'
              description='Become a Professional Game Developer'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder4}
              imgAlt='Placeholder Image'
              title='PHP Programming for Absolute Beginner | Lifetime'
              description='Learn the basics of PHP programming. No prior'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder5}
              imgAlt='Placeholder Image'
              title='(1) The Ultimate Password Hacking / Cracking Training'
              description='Everything you need to know about password'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder6}
              imgAlt='Placeholder Image'
              title='Ruby On Rails for Absolute Beginners | Lifetime'
              description='Get started with Ruby on Rails in a flash. The Must'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder7}
              imgAlt='Placeholder Image'
              title='(1) Perl from Scratch for beginners | Lifetime'
              description='Learn to Code with Perl even if you are a beginner'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder8}
              imgAlt='Placeholder Image'
              title='(1) Scratch Programming for Everybody'
              description='Have great fun Teaching your kid or yourself to code'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder9}
              imgAlt='Placeholder Image'
              title='Become Expert in HTML - For Beginners'
              description='Learn HTML, HTML5, basic concepts, key features, web'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder10}
              imgAlt='Placeholder Image'
              title='Learn HTML5 Formatted Text | Lifetime'
              description='Learn HTML5, formatted text, paragraph text, break tags'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder11}
              imgAlt='Placeholder Image'
              title='Learn HTML5 Hyperlinks & Connecting Pages'
              description='Learn HTML5, hyperlinks, contenting pages, interlink'
              link='/'
              buttonText='Add Course'
            />

            <Card
              imgSrc={Placeholder12}
              imgAlt='Placeholder Image'
              title='Professional HTML 5 Practice & Styling with CSS'
              description='Learn HTML 5, commenting codes, meta tags'
              link='/'
              buttonText='Add Course'
            />
            
          </div>
          
        </BodyContent>
      </div>
    </>
  )
}

export default AllCoursesPage