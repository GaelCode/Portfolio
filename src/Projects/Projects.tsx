import { CTA, Special_CTA } from "../boutons/CTA";
import '../index.css'
import Header from "../header/header";
import Fond from "../fond/fond";

const Projects = () => {
    return(
        <>
            <Fond />
            <main>
                <Header></Header>
                <section>
                    <CTA texte="My work"></CTA>
                </section>
            </main>
        </>
    )
}

export default Projects;