import Navbar from "../components/Navbar";
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <br /><br /><br /><br />
            <section id="ml" className="project_section">
                <h2>Machine Learning</h2>
                <ul className="project_list">
                    <li className="project_card">
                        <h3>Sign Language Classifier</h3>
                        <p>
                            Designed and implemented a convolutional neural network (CNN) to classify American Sign Language hand gestures from grayscale images. Built using Keras and trained on 28×28 image data.
                        </p>
                        <ul className="project_details">
                            <li>Custom model pipeline with data preprocessing, training, and evaluation</li>
                            <li>Used Conv2D, MaxPooling, Dense, and Dropout layers for feature extraction</li>
                            <li>Performed data normalization, one-hot encoding, and train-test split</li>
                            <li>Visualized training accuracy and predicted labels</li>
                        </ul>
                        <p><em>*Code not publicly available due to course policy*</em></p>
                    </li>
                    {/* Other projects below */}
                </ul>
            </section>



            <section id="frontend" className="project_section">
                <h2>Frontend / UI</h2>
                <ul className="project_list">
                    <li className="project_card">
                        <h3>Learn How to Play Egyptian Rat Screw</h3>
                        <p>
                            Built an interactive tutorial website to teach users the rules of the Egyptian Rat Screw card game through engaging visuals and quizzes.
                        </p>
                        <ul className="project_details">
                            <li>Step-by-step guides with annotated images and short video clips</li>
                            <li>Quizzes integrated into each section to reinforce learning</li>
                            <li>Runs locally using a Python server (python server.py)</li>
                        </ul>
                        <p><em>*Educational project – not deployed online*</em></p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Projects;