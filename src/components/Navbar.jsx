import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo-ipm.webp';
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={50} alt='logo' />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ivanpma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                        <FaLinkedin />
                </a>
                <a href="https://github.com/IvanPMa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                        <FaGithub />
                </a>
                <a href="https://www.instagram.com/iva.nmaldo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram">
                        <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100077532501118"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook">
                        <FaFacebook />
                </a>
            </div>
        </nav>
    )
}
