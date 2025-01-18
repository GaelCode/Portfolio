import { CTA, Special_CTA } from "../boutons/CTA";
import '../index.css'
import './accueil.css';
import Header from "../header/header";
import Fond from "../fond/fond";
import IndicationButton from "../boutons/indication";
import { useEffect } from "react";
import { animateElements, animateReverse } from "../animation"
import logo from './../assets/code-pc.jpg';

const Accueil = () => {
    useEffect(() => {
        animateReverse();
        animateElements();
    }, []);

    return (
        <>
            <IndicationButton></IndicationButton>
            <Fond />
            <main>
                <div className="container">
                    <Header></Header>
                    <section className="accueil">
                        <div className="info animatable">
                        <div className="hello">Bonjour, je suis</div>
                        <div className="name">Gaël</div>
                        <div className="learning">Étudiant en informatique</div>
                        <div className="position">français</div>
                            <div className="list-cta">
                                <a href="/about"><Special_CTA texte="À propos"></Special_CTA></a>
                                <a href="/projects"><CTA texte="Projets"></CTA></a>
                            </div>
                        </div>
                        <div className="image-container animatableReverse">
                            <img src={logo} alt="A computer on a desk, with an ide open" />
                            <p className="credit">Photo de <a href="https://unsplash.com/fr/@altumcode?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">AltumCode</a> sur <a href="https://unsplash.com/fr/photos/macbook-pro-sur-table-en-bois-noir-PNbDkQ2DDgM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a></p>
                        </div>
                    </section>
                </div>
            </main>
        </>
        
    );
};

export default Accueil;
