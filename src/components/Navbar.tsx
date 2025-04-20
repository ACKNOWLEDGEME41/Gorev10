import React from 'react';
import './Navbar.css';  

interface NavbarProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;  
}

const Navbar: React.FC<NavbarProps> = ({ setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list"> 
        <li className="nav-item">
          <button 
            onClick={() => setActivePage('home')} 
            className="nav-button">Ana Sayfa</button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => setActivePage('about')} 
            className="nav-button">Hakkında</button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => setActivePage('interests')} 
            className="nav-button">İlgi Alanlarım</button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => setActivePage('skills')} 
            className="nav-button">Yeteneklerim</button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => setActivePage('projects')} 
            className="nav-button">Projeler</button>
        </li>
        <li className="nav-item">
          <button 
            onClick={() => setActivePage('contact')} 
            className="nav-button">İletişim</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
