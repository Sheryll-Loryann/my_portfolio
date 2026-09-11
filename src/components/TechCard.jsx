import '../css/TechCard.css'
export default function TechCard({tech}){
    return(
        <div className="tech-card">     
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
        </div>
    );
}