import './Home.css'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <Navbar />

            <div className="intro">
                <h1>Hi, I'm Byeolah.</h1>
                <h3>(it's pronounced like BEE-o-la)</h3>
                <p>
                    I'm pursuing my Master's in Computer Science at Columbia University, focusing on Machine Learning. <br />
                    I also completed my undergraduate degree in Computer Science at Columbia.
                </p>
                <p>
                    My interests are Natural Language processing, Large Language Models, and K–12 computer science education.
                </p>
            </div>
        </div>
    );
};


export default Home;