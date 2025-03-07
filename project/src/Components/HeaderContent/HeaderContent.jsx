import React, { useEffect, useState } from 'react';
import { useUser } from '../../Contexts/UserContext'; 
import { useLocation } from 'react-router-dom';
import './HeaderContent.css';
import MenuLink from '../MenuLink/MenuLink';
import Logoimage from '../../assets/CodeDot-Logo.png';

function HeaderContent({ toggleLoginModal }) {
  const { currentUser, handleLogout } = useUser(); 
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  const isNotHomePage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={`navcontent ${sticky || isNotHomePage ? 'dark-nav' : ''}`}>
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