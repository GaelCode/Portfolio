import { CTA, Special_CTA } from "../boutons/CTA";
import './accueil.css';

const Accueil = () => {
    return (
        <section>
            <div className="info">
                <div className="hello">Hi, I'm</div>
                <div className="name">Gaël</div>
                <div className="learning">Computer Science student</div>
                <div className="position">From France</div>
                <div className="list-cta">
                    <a href="#"><Special_CTA texte="About"></Special_CTA></a>
                    <a href="#"><CTA texte="Projects"></CTA></a>
                </div>
            </div>
            <div className="image-container">
                <img src="/src/assets/code-pc.jpg" alt="A computer on a desk, with an ide open" />
                <p className="credit">Photo de <a href="https://unsplash.com/fr/@altumcode?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">AltumCode</a> sur <a href="https://unsplash.com/fr/photos/macbook-pro-sur-table-en-bois-noir-PNbDkQ2DDgM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a></p>
            </div>
        </section>
    );
};

export default Accueil;
