import IndicationButton from "../boutons/indication";
import '../index.css'
import './project.css'
import Header from "../header/header";
import Fond from "../fond/fond";

const Projects = () => {
    return(
        <>
            <IndicationButton></IndicationButton>
            <Fond />
            <main>
                <div className="container">
                    <Header></Header>
                    <section className="projects">
                        <div className="projects-grid">
                            <a href="https://github.com/GaelCode/Website/tree/master/50WordsChallenge" target="_blank">
                                <div className="project">
                                    <img src="src/assets/code-pc.jpg" alt="Project 1"/>
                                    <div className="project-text">
                                        <h3>Création d'un jeu en ligne pour entrainer son vocabulaire</h3>
                                        <button className="project-status">En cours</button>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/GaelCode/cybersecurity_learning">
                                <div className="project">
                                    <img src="src/assets/code-pc.jpg" alt="Project 1"/>
                                    <div className="project-text">
                                        <h3>Apprentissage de la cybersécurité en parcourant les différentes techniques</h3>
                                        <button className="project-status">En cours</button>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/GaelCode/DorfromantikInspiration">
                                <div className="project">
                                    <img src="src/assets/code-pc.jpg" alt="Project 1"/>
                                    <div className="project-text">
                                        <h3>Création d'un projet java ressemblant au jeu DorfRomantik</h3>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/GaelCode/JO2024_siteWeb">
                                <div className="project">
                                    <img src="src/assets/code-pc.jpg" alt="Project 1"/>
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