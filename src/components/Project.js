const Projects = () => {

    // List of all projects 
    const projects = [
                {
                'id' : 1,
                'title' : 'Citrone Redesign',
                'description' : 'Citrone is a platform that makes it easier for educators to create learning experiences that positively engage students.',
                'gihub_link' : 'https://github.com/Naythankik/citrone',
                'deployed_link' : {
                                    'href' : 'https://citrone.vercel.app/',
                                    'name' : 'citrone.vercel.app'
                                    },
                'tools' : ['NodeJS, Express, Cloudinary, MongoDB, Vercel']
                },
                {
                    'id' : 2,
                    'title' : 'E-Commerce APP',
                    'description' : 'E-Commerce APP allows registered user to access products of their choice with authentication.',
                    'gihub_link' : 'https://github.com/Naythankik/node-ecommerce',
                    'deployed_link' : {
                                        'href' : 'https://node-ecommerce-eta.vercel.app/',
                                        'name' : 'e-commerce.com'
                                        },
                    'tools' : ['NodeJS, Express, MongoDB, Vercel']
                },
                {
                    'id' : 3,
                    'title' : '3ird APP',
                    'description' : '3ird APP allows registered user to access products posted by a registered seller of their choice with authentication with carts, saved items, orders and tracking of orders and payment integration options.',
                    'gihub_link' : 'https://github.com/Naythankik/3ird',
                    'deployed_link' : {
                                        'href' : '#',
                                        'name' : '3ird.io'
                                        },
                    'tools' : ['Laravel/PHP, Mysql, Vercel']
                },
                {
                    'id' : 4,
                    'title' : 'Video APP',
                    'description' : 'VidApp is an imaginary app for renting and uploading of movies.',
                    'gihub_link' : 'https://github.com/Naythankik/vidApp',
                    'deployed_link' : {
                                        'href' : 'https://vid-app.vercel.app/',
                                        'name' : 'vidapp.com'
                                        },
                    'tools' : ['NodeJS, Express, MongoDB, Vercel']
                }
        ];

    return ( 
        <section className="services" style={{ backgroundColor: "white"}}>
            <div id="services">
                <h1>Projects</h1>

                <div className="providers">
                    <div className="projects">

                    { projects.map(function(project) {

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
                        })}

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Projects;