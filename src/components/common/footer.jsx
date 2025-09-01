import INFO from "../../data/user"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
import "./styles/footer.css"
import Icon from "./icon"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p className="copyright">© 2025 Gregory Bian.</p>
                </div>
                <div className="footer-right">
                    <Icon />
                </div>
            </div>
        </footer>
    )
}
