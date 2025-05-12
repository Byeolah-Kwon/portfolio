import Navbar from "../components/Navbar";
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact">
            <h1>Contact Me</h1>
            <p>If you'd like to get in touch, feel free to email me or connect through LinkedIn.</p>
            <p className="contact_info">
                Email: <a href="mailto:your.email@example.com">byeolahk@gmail.com</a><br/>
                LinkedIn: <a href="https://www.linkedin.com/in/byeolahkwon" target="_blank" rel="noopener noreferrer">linkedin.com/in/byeolahkwon</a><br/>
                GitHub: <a href="https://github.com/byeolah-kwon" target="_blank" rel="noopener noreferrer">github.com/byeolah-kwon</a>
            </p>
         </div>
         </div>
    );
};

export default Contact;