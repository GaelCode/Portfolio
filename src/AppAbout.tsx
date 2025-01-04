import Fond from './fond/fond'; // Import du composant Fond (majuscule)
import Header from './header/header';
import './index.css'

function AppAbout() {
    return (
        <>
        <Fond />
        <main>
            <Header></Header>
        </main>
        </>
    );
}

export default AppAbout;
