import { Link } from "react-router-dom"
import ThemeToggle from "./themeToggle"
import "./styles/navBar.css"


export default function NavBar(props){
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="/" className={props.active == "homepage" ? "navbar-active" :"navbar-link"}>Home</Link></li>
                    <li><Link to="/projects" className={props.active == "projectsPage" ? "navbar-active" :"navbar-link"}>Projects</Link></li>
                    <li><Link to="/experience" className={props.active == "experiencePage" ? "navbar-active" :"navbar-link"}>Experience</Link></li>
                    <li><Link to="/contact" className={props.active == "contactPage" ? "navbar-active" :"navbar-link"}>Contact</Link></li>
                </ul>
                
            </nav>
            <ThemeToggle />
        </div>
    )
}