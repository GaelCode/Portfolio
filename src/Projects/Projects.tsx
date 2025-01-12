import React, { useEffect, useRef } from "react";
import IndicationButton from "../boutons/indication";
import "../index.css";
import "./project.css";
import Header from "../header/header";
import Fond from "../fond/fond";

const Projects = () => {
    const projectRefs = useRef([]); // Références des projets
    const indicationRef = useRef(null); // Référence pour IndicationButton
    const fondRef = useRef(null); // Référence pour Fond
    const headerRef = useRef(null); // Référence pour Header

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Ajoute la classe 'visible' à l'élément visible
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 } // L'élément doit être visible à 10%
        );

        // Observer chaque élément (projets + autres)
        projectRefs.current.forEach((project) => {
            if (project) observer.observe(project);
        });

        // Observer les autres éléments
        if (indicationRef.current) observer.observe(indicationRef.current);
        if (fondRef.current) observer.observe(fondRef.current);
        if (headerRef.current) observer.observe(headerRef.current);

        return () => {
            // Nettoyer les observateurs
            projectRefs.current.forEach((project) => {
                if (project) observer.unobserve(project);
            });
            if (indicationRef.current) observer.unobserve(indicationRef.current);
            if (fondRef.current) observer.unobserve(fondRef.current);
            if (headerRef.current) observer.unobserve(headerRef.current);
        };
    }, []);

    return (
        <>
            <IndicationButton ref={indicationRef} />
            <Fond ref={fondRef} />
            <main>
                <div className="container">
                    <Header ref={headerRef} />
                    <section className="projects">
                        <div className="projects-grid">
                            {/* Projet 1 */}
                            <div
                                className="project hidden"
                                ref={(el) => el && projectRefs.current.push(el)} // Utilise push
                            >
                                <a
                                    href="https://github.com/GaelCode/Website/tree/master/50WordsChallenge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="src/assets/code-pc.jpg" alt="Project 1" />
                                </a>
                                <div className="project-text">
                                    <h3>Création d'un jeu en ligne pour entrainer son vocabulaire</h3>
                                    <button className="project-status">En cours</button>
                                </div>
                            </div>

                            {/* Projet 2 */}
                            <div
                                className="project hidden"
                                ref={(el) => el && projectRefs.current.push(el)} // Utilise push
                            >
                                <a
                                    href="https://github.com/GaelCode/cybersecurity_learning"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="src/assets/code-pc.jpg" alt="Project 2" />
                                </a>
                                <div className="project-text">
                                    <h3>Apprentissage de la cybersécurité en parcourant les différentes techniques</h3>
                                    <button className="project-status">En cours</button>
                                </div>
                            </div>

                            {/* Projet 3 */}
                            <div
                                className="project hidden"
                                ref={(el) => el && projectRefs.current.push(el)} // Utilise push
                            >
                                <a
                                    href="https://github.com/GaelCode/DorfromantikInspiration"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="src/assets/code-pc.jpg" alt="Project 3" />
                                </a>
                                <div className="project-text">
                                    <h3>Création d'un projet java ressemblant au jeu DorfRomantik</h3>
                                </div>
                            </div>

                            {/* Projet 4 */}
                            <div
                                className="project hidden"
                                ref={(el) => el && projectRefs.current.push(el)} // Utilise push
                            >
                                <a
                                    href="https://github.com/GaelCode/JO2024_siteWeb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="src/assets/code-pc.jpg" alt="Project 4" />
                                </a>
                                <div className="project-text">
                                    <h3>Création du site web des Jeux Olympique</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Projects;
