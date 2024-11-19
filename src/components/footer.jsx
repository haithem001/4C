import React from "react";
import "./footer.css";
import c4 from "../img/4c.jpeg";
import isgb from "../img/isgb.png";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="topfooter">
          <div className="element">
            <div>
              <h5>À propos de Nous</h5>
              <p className="apropos informations">
                Le Centre de Carrière et de Certification des Compétences « 4C »
                est une structure présente dans les établissements
                universitaires...
              </p>
            </div>
            <div>
              <h5>Informations</h5>
              <div className="informations">
                <div className="iconsftr">
                  <EmailIcon />
                  <h2 className="apropos emails">4c@isgb.ucar.tn</h2>
                </div>
                <div className="iconsftr">
                  <EmailIcon />
                  <h2 className="apropos emails">Equipe4c@isgb.ucar.tn</h2>
                </div>
                <div className="iconsftr">
                  <PlaceIcon />
                  <h2 className="apropos emails">
                    C.U Menzel Abderahmene 7035
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <table>
                <tr>
                  <td>
                    <img className="footerlogo" src={c4} alt="" />
                  </td>
                  <td className="apropos logotitle">4C</td>
                </tr>
                <tr>
                  <td className="apropos logotitle">ISGB</td>
                  <td>
                    <img className="footerlogo" src={isgb} alt="" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="socialmedia">
          <Link to={"https://www.facebook.com/profile.php?id=61567461394371"} target="_blank"><FacebookIcon color="primary"/></Link>
          <LinkedInIcon />
          <XIcon />
        </div>
        <div>
          <h5 className="copy">
            &copy; 2024 All right reserved | Powered by&nbsp;
            <Link
              className="by"
              to={"https://www.linkedin.com/in/hazem-saidani-b87814271"}
              target="_blank"
            >
              Saidani Hazem
            </Link>{" "}
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
