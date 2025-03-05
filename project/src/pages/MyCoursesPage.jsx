import React, { useState } from 'react';
import '../App.css'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import BodyContent from '../Components/BodyContent/BodyContent'
import LoginRegister from '../Components/LoginRegister/LoginRegister';

function MyCoursesPage() {

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

        </BodyContent>
      </div>
    </>
  )
}

export default MyCoursesPage