import NavBar from "../components/common/navBar"
import INFO from "../data/user"
import Toolbox from "../components/common/toolbox"
import Footer from "../components/common/footer"
import "./styles/Homepage.css"
import "../components/projects/styles/allProjects.css"
import "../components/projects/styles/project.css"
import AllProjects from "../components/projects/allProjects"
import Icon from "../components/common/icon"

export default function Homepage(){
    return(
        <>
            <div className="page-content">
                <NavBar active="homepage"/>
                <div className="content-wrapper">
                    <div className="homepage-container">
                        <div className="homepage-firstpart">
                            <div className="homepage-firstpartleft">
                                <div className="title homepage-title">
                                    {INFO.homepage.title}
                                </div>
                                <div className="highlight homepage-highlight">
                                    {INFO.homepage.highlight}
                                </div>
                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description}
                                </div>
                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description2}
                                </div>
                                <Icon />
                            </div>

                            <div className="homepage-firstpartright">
                                <Toolbox/>
                            </div>
                        </div>
                        <hr className="homepage-line"/>
                        <div className="homepage-projects-container">
                            <div className="homepage-projects-header">
                                <div className="projects-title-row">
                                    <div className="title homepage-title">
                                        Check out some of my
                                    </div>
                                    <div className="highlight homepage-highlight-projects"> {"HIGHLIGHTS!."} </div>
                                </div>
                                <AllProjects/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}