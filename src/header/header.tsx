import {CTA} from "../boutons/CTA"
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <a href="mailto:goddosmarcel@gmail.com">
                    <CTA texte="Contact me"></CTA>
                </a>
            </div>                
                
        </header>
    )
}

export default Header