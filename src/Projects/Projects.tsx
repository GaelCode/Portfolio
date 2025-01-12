import { useEffect } from "react";
import IndicationButton from "../boutons/indication";
import '../index.css'
import './project.css'
import Header from "../header/header";
import Fond from "../fond/fond";
import { animateElements } from "../animation"; 
import wc from "./../assets/wordChallenge.png"
import cs from "./../assets/cybersecurite.png"
import df from "./../assets/dorfmantik.png"
import jo from "./../assets/jo.png"

const Projects = () => {
    useEffect(() => {
        animateElements();
    }, []);

    return(
        <>
            <IndicationButton />
            <Fond />
            <main>
                <div className="container">
                    <Header />
                    <section className="projects">
                        <div className="projects-grid">
                            <a href="https://github.com/GaelCode/Website/tree/master/50WordsChallenge" target="_blank">
                                <div className="project animatable"> 
                                    <img src={wc} alt="Project 1"/>
                                    <div className="project-text">
                                        <h3>Création d'un jeu en ligne pour entrainer son vocabulaire</h3>
                                        <button className="project-status">En cours</button>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/GaelCode/cybersecurity_learning" target="_blank">
                                <div className="project animatable"> 
                                    <img src={cs} alt="Project 2"/>
                                    <div className="project-text">
                                        <h3>Apprentissage de la cybersécurité en parcourant les différentes techniques</h3>
                                        <button className="project-status">En cours</button>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/GaelCode/DorfromantikInspiration" target="_blank">
                                <div className="project animatable"> 
                                    <img src={df} alt="Project 3"/>
                                    <div className="project-text">
                                        <h3>Création d'un projet java ressemblant au jeu DorfRomantik</h3>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/GaelCode/JO2024_siteWeb" target="_blank">
                                <div className="project animatable"> 
                                    <img src={jo} alt="Project 4"/>
                                    <div className="project-text">
                                        <h3>Création du site web des Jeux Olympique</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Projects;
