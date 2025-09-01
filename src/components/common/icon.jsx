import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
import INFO from "../../data/user"
import "./styles/icon.css"

export default function Icon(props){
    return(
        <div className="social-links">
            <a href={INFO.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub />
            </a>
            <a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin />
            </a>
            <a href={INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <FaInstagram />
            </a>
            <a href={`mailto:${INFO.socials.email}`} className="social-link" title="Email">
                <FaEnvelope />
            </a>
        </div>
    )
}
