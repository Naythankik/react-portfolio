import { useState } from "react";
import ServiceList from "../templates/ServiceList";

const Services = () => {

    const [providers, setProvider] = useState([
            {
                'id' : 1,
                'title' : 'Frontend Development',
                'description' : 'I render a website visitors can easily interact with the pages. I do this through the combination of design, technology and programming to code a website’s appearance, as well as taking care of debugging and Optimizing the user experience.',
                'image' : 'frontend.png',
                'visibility' : true
            },
            {
                'id' : 2,
                'title' : 'Backend Development',
                'description' : 'I write server-side web application logic. This includes developing APIs, creating and managing databases and handling data storage and retrieval. I work together with front-end developers to ensure seamless integration of the website or application.',
                'image' : 'backend.png',
                'visibility' : true
            },
            {
                'id' : 3,
                'title' : 'Mobile Application Development',
                'description' : 'We provide a range of mobile application development services including custom mobile development on Android and IOs platforms, building cross-platform apps, designing user experience.',
                'image' : 'mobile.png',
                'visibility' : false
            },
            {
                'id' : 4,
                'title' : 'Web Application Development',
                'description' : 'I\'m involved in the development, testing, and deployment phases. Essentially, I write the code and implement the features of the application and test the application to ensure that it is bug-free and that it meets all requirement.',
                'image' : 'web.png',
                'visibility' : true
            }
        ]);
     
    return ( 
        <section className="services">
            <div id="services">
                <h1>Services</h1>
                <h3>What I Provide</h3>

                <ServiceList providers={providers} />

            </div>
        </section>
     );
}
 
export default Services;