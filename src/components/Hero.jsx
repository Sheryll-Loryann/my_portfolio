import "../css/Hero.css"
import translation from '../data/translation'

export default function Hero({language}){

    const t = translation[language];
    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>
                    {t.hero.greeting}
                    <span className="name"> Jane Doe</span>
                </h1>

                <p>
                    
                    {t.hero.description}
                    <span className="university">
                        <a href="https://www.uottawa.ca/en">uOttawa</a>
                    </span>
                </p>
                <p>
                    {t.hero.line}{" "}. {t.hero.currently}{" "} 
                    <span className="glow">{t.hero.learning}</span>,{" "}
                    <span className="glow"> {t.hero.experimenting}</span>{" "}
                    {t.hero.and}{" "} 
                    <span className="glow">{t.hero.turningIdeas}</span>.
                </p>
            </div>
        </section>
    )
}