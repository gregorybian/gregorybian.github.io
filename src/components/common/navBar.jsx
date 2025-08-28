import { Link } from "react-router-dom"
import "./styles/navBar.css"


export default function NavBar(){
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </div>
    )
}