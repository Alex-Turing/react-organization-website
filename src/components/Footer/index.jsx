import './Footer.css';

const Footer = () => {
    return(
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/alexander-hernandez-software-developer'>
                    <img src='/img/linkedin.png' alt='linkedin logo' />
                </a>
                <a href='https://github.com/Alex-Turing'>
                    <img src='/img/github.png' alt='github logo' />
                </a>
                <a href='mailto:alexanderhernandez0684@gmail.com'>
                    <img src='/img/gmail.png' alt='gmail logo' />
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