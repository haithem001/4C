import React from 'react';
import Chiffre from "./chiffre";
import editedimg from "../img/4cc.png";
import Imgswiper from "./imgswiper";
import mission from "../img/mission.png";
import formation from "../img/salle-de-classe.png";
import insertion from "../img/Integration.png";
const Main = props => {

    return (
        <div id="main">
            <h1 className="title" >Le Pouvoir de la Formation</h1>
            <Chiffre/>

            <Imgswiper/>
            <h1 className="title">Éclairer Votre Chemin Vers l’Emploi</h1>

            <div className="container1">
                <table className="tablecontent">
                    <tr>
                        <td>
                            <div className="titlesicons">
                                <img className="troisimg" src={mission} alt=""/>
                                <h3>Mission</h3>
                            </div>
                        </td>
                        <td>
                            <div className="column"></div>
                        </td>
                        <td className="tablecontent">
                            Améliorer l’employabilité des étudiants à travers des programmes
                            de conseil, d’accompagnement, de formation et d’ouverture sur
                            l’environnement socio-économique...
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="titlesicons">
                                <img className="troisimg" src={formation} alt=""/>
                                <h3>Formation</h3>
                            </div>
                        </td>
                        <td>
                            <div className="column"></div>
                        </td>
                        <td className="tablecontent">
                            Améliorer la formation des étudiants à travers des certifications
                            très demandées sur le marché de l’emploi par des professionnels
                            qualifiés, Assurer des ateliers de formation en soft skills,
                            techniques de entrepreneuriat recherche d’emploi et
                            entrepreneuriat...
                        </td>
                    </tr>

                    <tr>

                        <td>
                            <div className="titlesicons">
                                <img className="troisimg" src={insertion} alt=""/>
                                <h3>Insertion</h3>
                            </div>
                        </td>
                        <td>
                            <div className="column"></div>
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

        </div>

    );
}
export default Main;