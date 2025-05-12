import Navbar from "../components/Navbar";
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <h1>Projects</h1>
            <div className="project_nav">
                <a href="#ml">Machine Learning</a> | <a href="#frontend">Frontend / UI</a>
            </div>

            <section id="ml" className="project_section">
                <h2>Machine Learning</h2>
                <ul>U.S. Census Prediction</ul>
                <ul>Sign Language Classifier</ul>
                <ul>Sentiment Analysis</ul>  
                
            </section>

            <section id="frontend" className="project_section">
                <h2>Frontend / UI</h2>
                <ul>
                    Portfolio Website
                    Flexbox Recipe Demo
                </ul>
            </section>
        </div>
    )
}

export default Projects;