import Fond from './fond/fond'; // Import du composant Fond (majuscule)
import Header from './header/header';
import './index.css'

function About() {
    return (
        <>
        <Fond />
        <main>
            <Header></Header>
        </main>
        </>
    );
}

export default About;
