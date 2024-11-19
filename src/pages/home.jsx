import React from "react";
import "../App.css";
import "../components/navbar";
import Navbar from "../components/navbar";
import editedimg from "../img/4cc.png";
import mission from "../img/mission.png";
import formation from "../img/salle-de-classe.png";
import insertion from "../img/Integration.png";
import Footer from "../components/footer";

import Events from "../components/events";
import {allget} from '../api';
import {useEffect,useState } from "react";
import Partenaires from "../components/partenaires";
import Clubs from "../components/clubs";
import Chiffre from "../components/chiffre";
import Imgswiper from "../components/imgswiper";

const Home = () => {

  const [event, setEvents] = useState([]); 
  const [clubs, setClubs] = useState([]);
  const [parts, setParts] = useState([]);

  useEffect(() => {
    allget()
      .then((data) => {
        setEvents(data.events);
        setClubs(data.clubs);
        setParts(data.parts);
      })
      .catch((err) => {
        console.log("Failed to fetch events");
      });
  }, []);




  return (
    <>
      <Navbar />
<Imgswiper/>
      <div className="def" id="propos">

        
        <div className="titre" >
          <h3>Centre 4C - ISGB</h3>
          <p>
            Le <b>C</b>entre de <b>C</b>arrière et de <b>C</b>ertification des{" "}
            <b>C</b>ompétences « 4C » est une structure présente dans les
            établissements universitaires et constitue le maillon entre
            l’université et les acteurs socio- économiques...
          </p>
        </div>

        <div className="picture">
          <img src={editedimg} alt="" />
        </div>
      </div>
      <Chiffre/>
      <div className="tablezone">
        <table>
          <tr>
            <td>
              <hr className="ligne2" />
            </td>
            <td>
              <div className="titlesicons">
                <img className="troisimg" src={mission} alt="" />
                <h3>Mission</h3>
              </div>
            </td>
            <td className="tablecontent">
              Améliorer l’employabilité des étudiants à travers des programmes
              de conseil, d’accompagnement, de formation et d’ouverture sur
              l’environnement socio-économique...
            </td>
          </tr>
        </table>
        <br />
        <table>
          <tr>
            <td>
              <div className="titlesicons">
                <img className="troisimg" src={formation} alt="" />
                <h3>Formation</h3>
              </div>
            </td>
            <td className="tablecontent">
              Améliorer la formation des étudiants à travers des certifications
              très demandées sur le marché de l’emploi par des professionnels
              qualifiés, Assurer des ateliers de formation en soft skills,
              techniques de entrepreneuriat recherche d’emploi et
              entrepreneuriat...
            </td>
          </tr>
        </table>
        <br />
        <table>
          <tr>
            <td>
              <hr className="ligne" />
            </td>
            <td>
              <div className="titlesicons">
                <img className="troisimg" src={insertion} alt="" />
                <h3>Insertion</h3>
              </div>
            </td>
            <td className="tablecontent">
              Accompagnement dans la préparation du dossier de candidature pour
              un stage ou un emploi,Organisation de journées carrière et
              rencontre avec les entreprises Partenariat avec les associations,
              les clubs et les ONG...
            </td>
          </tr>
        </table>
      </div>


<div className="eventligne" id="events">
<h4>Événement</h4>
</div>


<Events events={event}/>



<div className="eventligne">
<h4>Partenaires</h4>
</div>

<Partenaires parts={parts}/>

<div className="eventligne" >
<h4>Clubs</h4>
</div>
<Clubs clubs={clubs}/>
<br /><br />

      <Footer/>
    </>
  );
};

export default Home;
