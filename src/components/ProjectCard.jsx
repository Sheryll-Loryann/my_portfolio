import '../css/ProjectCard.css'


export default function ProjectCard({project, linkText}){
    return(
        <>
            <div className="project-card">
                
                <div className="project-info">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a href={project.link} className="project-link">{linkText}</a>
                </div>

                <div className="project-image">
                    <img src={project.image} alt={project.name} />
                </div>
                
            </div>
        </>
    );
}