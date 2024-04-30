import { FaMedium } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">
                <a href="mailto:ataturhan21@gmail.com">Email: ataturhan21@gmail.com</a>
                </p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://medium.com/@ataturhan"><i><FaMedium /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;