import '../css/Navbar.css'
import translation from '../data/translation'

export default function Navbar({language, setLanguage}){

    const t = translation[language];
    return(
        <nav className="navbar">
            <div className="logo">
                <a href="#home">Jane Doe</a>
            </div>
            <ul className="nav-links">
                <li><a href="#home">{t.navbar.home}</a></li>
                <li><a href="#tech-stack">{t.navbar.techStack}</a></li>
                <li><a href="#projects">{t.navbar.projects}</a></li>
                <li><a href="#contact">{t.navbar.contact}</a></li>
            </ul>
            <div className="btns">
                <button 
                    className="btn"
                    onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                >
                    {language === "en" ? "Français" : "English"}
                </button>
            </div>
        </nav>
    );
}