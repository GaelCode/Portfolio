import '../index.css'
import './about.css'
import Header from "../header/header";
import Fond from "../fond/fond";
import IndicationButton from "../boutons/indication";
import { useEffect } from "react";
import { animateElements } from "../animation"
import ab from "./../assets/About.png"

const About = () => {
    useEffect(() => {
        animateElements();
    }, []);

    return(
        <>
            <IndicationButton></IndicationButton>
            <Fond />
            <main>
                <div className="container">
                    <Header></Header>
                    <section className='about animatable'>
                        <div className="presentation">
                            <div className="texte">
                                <h2><span className="grandi">Presentation</span></h2>
                                <p>
                                    <span className="grandi">Je</span> <span className="grandi">m'appelle</span> <span className="grandi">Gaël</span> <span className="grandi">Oddos-Marcel,</span> <span className="grandi">et</span> <span className="grandi">je</span> <span className="grandi">suis</span> <span className="grandi">actuellement</span> <span className="grandi">en</span> <span className="grandi">deuxième</span> <span className="grandi">année</span> <span className="grandi">d'un</span> <span className="grandi">programme</span> <span className="grandi">en</span> <span className="grandi">alternance</span> <span className="grandi">dans</span> <span className="grandi">un</span> <span className="grandi">BUT</span> <span className="grandi">Informatique.</span> <span className="grandi">En</span> <span className="grandi">parallèle,</span> <span className="grandi">je</span> <span className="grandi">travaille</span> <span className="grandi">en</span> <span className="grandi">tant</span> <span className="grandi">que</span> <span className="grandi">développeur</span> <span className="grandi">front-end</span> <span className="grandi">chez</span> <span className="grandi">Net.Com,</span> <span className="grandi">une</span> <span className="grandi">agence</span> <span className="grandi">web.</span>
                                </p>
                                <p>
                                    <span className="grandi">Je</span> <span className="grandi">suis</span> <span className="grandi">passionné</span> <span className="grandi">par</span> <span className="grandi">la</span> <span className="grandi">cybersécurité</span> <span className="grandi">et</span> <span className="grandi">les</span> <span className="grandi">nouvelles</span> <span className="grandi">technologies,</span> <span className="grandi">toujours</span> <span className="grandi">avide</span> <span className="grandi">de</span> <span className="grandi">nouveaux</span> <span className="grandi">défis</span> <span className="grandi">et</span> <span className="grandi">désireux</span> <span className="grandi">d'élargir</span> mes <span className="grandi">connaissances.</span> <span className="grandi">Je</span> <span className="grandi">suis</span> <span className="grandi">constamment</span> <span className="grandi">à</span> <span className="grandi">la</span> <span className="grandi">recherche</span> <span className="grandi">d'opportunités</span> <span className="grandi">pour</span> <span className="grandi">approfondir</span> <span className="grandi">mon</span> <span className="grandi">expertise</span> <span className="grandi">et</span> <span className="grandi">mettre</span> <span className="grandi">en</span> <span className="grandi">pratique</span> <span className="grandi">mes</span> <span className="grandi">compétences</span> <span className="grandi">sur</span> <span className="grandi">des</span> <span className="grandi">projets</span> <span className="grandi">concrets.</span>
                                </p>
                                <p>
                                    <span className="grandi">Je</span> <span className="grandi">suis</span> <span className="grandi">enthousiaste</span> <span className="grandi">à</span> <span className="grandi">l'idée</span> <span className="grandi">de</span> <span className="grandi">rejoindre</span> <span className="grandi">une</span> <span className="grandi">école</span> <span className="grandi">d'ingénieurs</span> <span className="grandi">spécialisée</span> <span className="grandi">en</span> <span className="grandi">cybersécurité,</span> <span className="grandi">ainsi</span> <span className="grandi">que</span> <span className="grandi">de</span> <span className="grandi">trouver</span> <span className="grandi">une</span> <span className="grandi">entreprise</span> <span className="grandi">où</span> <span className="grandi">je</span> <span className="grandi">pourrai</span> <span className="grandi">poursuivre</span> <span className="grandi">mon</span> <span className="grandi">expérience</span> <span className="grandi">en</span> <span className="grandi">alternance.</span> <span className="grandi">Mon</span> <span className="grandi">objectif</span> <span className="grandi">est</span> <span className="grandi">de</span> <span className="grandi">combiner</span> <span className="grandi">mes</span> <span className="grandi">compétences</span> <span className="grandi">techniques</span> <span className="grandi">et</span> <span className="grandi">ma</span> <span className="grandi">passion</span> <span className="grandi">pour</span> <span className="grandi">l'innovation</span> <span className="grandi">afin</span> <span className="grandi">de</span> <span className="grandi">contribuer</span> <span className="grandi">à</span> <span className="grandi">l'évolution</span> <span className="grandi">constante</span> <span className="grandi">du</span> <span className="grandi">paysage</span> <span className="grandi">numérique.</span>
                                </p>
                            </div>
                            <div className='image'>
                                <img src={ab} alt="A simple 2D drawing of a person" />
                            </div>
                        </div>
                    </section>
                </div>
                
                <div className="Formation">
                    <div className="container">
                        <h2 className='animatable'>
                            Formation
                        </h2>
                        <div className="school">
                            <div className="lycee animatable">
                                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 484.006 484.006">
                                    <g>
                                        <g>
                                            <polygon points="484.006,189.845 484.006,179.186 241.897,62.561 0,179.083 0,189.946 241.897,306.471 		"/>
                                            <path d="M83.808,251.571v69.7l145.836,70.25h24.506l145.435-70.057c0.14-0.307,0.271-0.613,0.402-0.922V251.57l-158.09,76.152
                                                L83.808,251.571z"/>
                                            <polygon points="458.506,358.195 458.506,222.599 439.359,232.255 439.359,358.195 426.883,396.203 445.742,421.445 
                                                452.123,421.445 470.981,396.203 		"/>
                                        </g>
                                    </g>
                                </svg>
                                <div className="info-about">
                                    <p>High School Saint-Pierre</p>
                                    <span>Specialities: mathématique, NSI, Physique Chimie</span>
                                </div>
                            </div>
                            <div className="universite animatable">
                                <svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><polygon points="46.73 53.68 16.58 53.68 16.58 22.74 31.65 10.74 46.73 22.74 46.73 53.68" strokeLinecap="round"/><polyline points="25.76 53.68 25.76 42.03 37.55 42.03 37.55 53.68" strokeLinecap="round"/><circle cx="31.65" cy="26.65" r="4.23" strokeLinecap="round"/><polyline points="16.58 53.68 9.49 53.68 9.49 31.48 16.58 31.48" strokeLinecap="round"/><polyline points="46.73 31.48 54.51 31.48 54.51 53.68 46.73 53.68" strokeLinecap="round"/></svg>
                                <div className="info-about">
                                    <p>University UPEC</p>
                                    <span>BUT Informatique</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About;