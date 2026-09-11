import ProjectCard from "./ProjectCard";
import weather from "../assets/project-imgs/weather-dashboard.png"
import calculator from  "../assets/project-imgs/calculator.png"
import translation from '../data/translation'

import '../css/Projects.css'


export default function Projects({language}){

    const t = translation[language];

    const projects=[
    
    {
        name: t.projects.weather.name,
        description: t.projects.weather.description, 
        link: "https://github.com/Sheryll-Loryann/Boringlearning",
        image: weather
    },

    {
        name: t.projects.budget.name, 
        description: t.projects.budget.description, 
        link: "https://github.com/Sheryll-Loryann/Budget_app",
        image: null
    },

    {
        name: t.projects.taskManager.name, 
        description: t.projects.taskManager.description, 
        link: "https://github.com/Sheryll-Loryann/CLI-Task-Manager",
        image:null
    },

    {
        name: t.projects.calculator.name, 
        description: t.projects.calculator.description, 
        link: "https://github.com/Sheryll-Loryann/Boringlearning/tree/main/fc",
        image: calculator
    },

    
]
    return(
        <>
            <section className="projects" id="projects">
                <h1>{t.projects.title}</h1>

                <div className="project-grid">
                    {projects.map((project)=>(
                        <ProjectCard key={project.name} project={project} linkText={t.projects.link}/>
                    ))}            
                </div>
            </section>
        </>
    )
}