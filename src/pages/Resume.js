import './Resume.css';

import Navbar from "../components/Navbar";
const Resume = () => {
    return (<div>

        <Navbar/>
        <br/><br/><br/><br/><br/>
   
        <div className="resume_download">
            <a  href={`https://docs.google.com/document/d/158WeUa86v-PfA1cYNCUuGalcvPS7pN-OGWMtqW9SUEg/export?format=pdf`}>
            <button className="download_button">Download Resume</button>
            </a>
        </div>

        <div className="resume_content">
        <iframe
                    src={`https://drive.google.com/file/d/158WeUa86v-PfA1cYNCUuGalcvPS7pN-OGWMtqW9SUEg/preview`}
                    width="100%"
                    height="900px"
                    allow="autoplay"
                    title="Byeolah Resume"
                ></iframe>
       </div>
        
    </div>
)}

export default Resume;