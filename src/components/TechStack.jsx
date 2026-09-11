import "../css/TechStack.css"

import html5 from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/javascript.svg'
import git from '../assets/git.svg'
import github from '../assets/github-icon.svg'
import java from '../assets/java.svg'
import npm from '../assets/npm-icon.svg'
import python from '../assets/python.svg'
import react from '../assets/react.svg'
import vs from '../assets/visual-studio-code.svg'
import vite from '../assets/vite.svg'

import TechCard from './TechCard'

import translations from "../data/translation"


export default function TechStack({language}) {
    const t = translations[language];

    const languages=[
    {name: 'HTML5', icon: html5},
    {name: 'CSS3', icon: css},
    {name: 'JavaScript', icon: js},
    {name: 'Java', icon: java},
    {name: 'Python', icon: python},
];

const tools=[
    {name: 'Git', icon: git},
    {name: 'GitHub', icon: github},
    {name: 'VS Code', icon: vs},
    {name: 'npm', icon: npm},
    {name: 'Vite', icon: vite},
];
    
    return(
        <>
            
            <section className="tech-stack" id="tech-stack">
                <h1>{t.techStack.title}</h1>

                <h3>{t.techStack.languages}</h3>


                <div className="tech-grid">
                    {languages.map((tech)=>(
                        <TechCard key={tech.name} tech={tech}/>
                    ))}
                </div>

                <h3>{t.techStack.tools}</h3>
                <div className="tech-grid">
                    {tools.map((tech)=>(
                        <TechCard key={tech.name} tech={tech}/>
                    ))}
                </div>
            </section>
        </>
    )
}