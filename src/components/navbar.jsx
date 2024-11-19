import React, { useState } from 'react';
import "./navbar.css";
import c4 from "../img/4cc.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior:"smooth" });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="nav">
      <div className="presentation">
        <img src={c4} alt="Logo" />
        <div className="titles">
          <h4>CENTRE DE CARRIÈRES ET DE CERTIFICATION DES COMPÉTENCES</h4>
          <h4>INSTITUT SUPÉRIEUR DE GESTION DE BIZERTE</h4>
        </div>
      </div>

      <div className="navbar">
        <ul className={`navbarlist ${mobileMenuOpen ? "open" : ""}`}>
          <li className="menu__link" onClick={() => scroll("events")}>Événement</li>
          <li className="menu__link" onClick={() => scroll("parts")}>Partenaires</li>
          <li className="menu__link" onClick={() => scroll("clubs")}>Clubs</li>
          <li className="menu__link" onClick={() => scroll("propos")}>À propos</li>
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
