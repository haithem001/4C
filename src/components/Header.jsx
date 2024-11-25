import React from 'react';
import editedimg from "../img/4c.png";
import c4 from "../img/4cc.png";
import c4i from "../img/4cInv.png"
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import withWidth from "@mui/material/Hidden/withWidth";

const Header = props => {
    return (
        <div>
        <header id="header" className="fixed-top  d-flex justify-content-center align-items-center header-transparent">
            <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li className="active"><a href="#header" id="navhome">Acceuil</a></li>
                        <li><a href="#events" id="navportfolio">Événements</a></li>
                        <li><a href="#parts" id="navcontact">Partenaires</a></li>
                        <li><a href="#clubs" id="navabout">Clubs</a></li>
                        <li><a href="#propos" id="navabout">À propos</a></li>
                    </ul>

            </nav>
        </header>
            <section id="hero">
                <div className="hero-container">

                    <div className="picture">
                        <img src={c4i} alt=""/>
                    </div>
                    <h1 className="hero">Centre 4C - ISGB</h1>
                    <div className="description">

                            Le <b>C</b>entre de <b>C</b>arrière et de <b>C</b>ertification des{" "}
                            <b>C</b>ompétences « 4C » est une structure présente dans les
                            établissements universitaires et constitue le maillon entre
                            l’université et les acteurs socio- économiques...

                    </div>

                    {/* <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down">&10035;</i></a> */}
                </div>
            </section>


        </div>
    );
}
export default Header;