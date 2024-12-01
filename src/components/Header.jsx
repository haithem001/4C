import React from 'react';
import editedimg from "../img/4c.png";
import c4 from "../img/4cc.png";
import c4i from "../img/4cInv.png"
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import withWidth from "@mui/material/Hidden/withWidth";

const Header = props => {
    let blinkTextMenuLinks = document.querySelectorAll(".blink-text-menu li a");
    blinkTextMenuLinks.forEach(link => {
        let letters = link.textContent.split("");
        link.textContent = "";
        letters.forEach((letter, i) => {
            i += 1;
            let span = document.createElement("span");
            let delay = i / 20;
            if (i % 2 === 0) {
                delay -= 0.1;
            } else {
                delay += 0.05;
            }
            let letterOut = document.createElement("span");
            letterOut.textContent = letter;
            letterOut.style.transitionDelay = `.${delay}s`;
            letterOut.classList.add("out");
            span.append(letterOut);
            let letterIn = document.createElement("span");
            letterIn.textContent = letter;
            letterIn.style.transitionDelay = `.${delay}s`;
            letterIn.classList.add("in");
            span.append(letterIn);
            link.append(span);
        });
    });

    return (
        <div>
        <header id="header" className="fixed-top  d-flex justify-content-center align-items-center header-transparent">
            <nav className="nav-menu d-none d-lg-block">
                <ul className="">

                    <li className="active"><a href="#header" >Acceuil</a></li>
                    <li><a href="#main" >À propos</a></li>
                    <li><a href="#events" >Événements</a></li>
                    <li><a href="#parts" >Partenaires</a></li>
                    <li><a href="#clubs" >Clubs</a></li>

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
                    <a href="#main">
                        <svg className="arrows">
                            <path className="a1" d="M0 0 L30 32 L60 0"></path>
                            <path className="a2" d="M0 20 L30 52 L60 20"></path>
                            <path className="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </a>


                    {/* <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down">&10035;</i></a> */}
                </div>
            </section>


        </div>
    );
}
export default Header;