const ProjectList = ({ projects }) => {
    return ( 
         projects.map(project => {

            return (
                <div className="project" key={project.id}>
            <h2>{project.title}</h2>
            <p style={{ color: 'black', padding: '10 0' }}>{project.description}</p>
            <p>
                Github :
                <a href={project.gihub_link} target="_blank">{project.gihub_link}</a>
            </p>
            <p>
                Deployment :
                <a href={project.deployed_link.href} target="_blank">{project.deployed_link.name}</a>
            </p>
            <p>Tools : {project.tools}</p>
            </div>
            )
            })
     );
}
 
export default ProjectList;