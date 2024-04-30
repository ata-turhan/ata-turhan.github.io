import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/pfp.png';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Ata Turhan</div>
                        <div className="body-text">Machine Learning Software Engineer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/ata-turhan" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/ataturhan/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;