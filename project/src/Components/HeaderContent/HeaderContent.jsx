import React from 'react';
import { useUser } from '../../Contexts/UserContext'; 
import './HeaderContent.css';
import MenuLink from '../MenuLink/MenuLink';
import Logoimage from '../../assets/CodeDot-Logo.png';

function HeaderContent({ toggleLoginModal }) {
  const { currentUser, handleLogout } = useUser(); 

  return (
    <nav>
      <div className="navcontent">
        <img src={Logoimage} alt="Logo" className="logo" />
        <div className="nav-links">
          <MenuLink linkname="Home" url="/" />
          <MenuLink linkname="All Courses" url="/allcourses" />
          <MenuLink linkname="My Courses" url="/mycourses" />
          {currentUser ? (
            <>
              <span className="welcome-message">Welcome, {currentUser.username}</span>
              <button className="btnLogin-popup" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="btnLogin-popup" onClick={toggleLoginModal}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HeaderContent;