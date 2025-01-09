import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return(
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/alexander-hernandez-software-developer'>
                    <FaLinkedin className="social-media__icon" />
                </a>
                <a href='https://github.com/Alex-Turing'>
                    <FaGithubSquare className="social-media__icon" />
                </a>
                <a href='mailto:alexanderhernandez0684@gmail.com'>
                    <SiGmail className="social-media__icon" />
                </a>
            </div>
            <img src='img/Logo.png' alt='logo' />s
            <div className='footer__text'>
                <strong>Developed by Alexander Hernandez</strong>
                <strong>2025</strong>
            </div>
        </footer>
    )
};

export default Footer;