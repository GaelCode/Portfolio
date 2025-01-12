import {CTA} from "../boutons/CTA"
import './header.css'
import { useEffect } from "react";
import { animateElements } from "../animation"


const Header = () => {
    useEffect(() => {
        animateElements();
    }, []);

    return (
        <header className="animatable">
            <div className="menu">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/projects">Projets</a></li>
                    <li><a href="/about">À propos</a></li>
                </ul>
                <a href="mailto:goddosmarcel@gmail.com">
                    <CTA texte="Contact"></CTA>
                </a>
            </div>                
                
        </header>
    )
}

export default Header