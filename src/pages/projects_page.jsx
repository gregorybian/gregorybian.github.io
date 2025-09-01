import NavBar from "../components/common/navBar"
import AllProjects from "../components/projects/allProjects"
import Footer from "../components/common/footer"
import "./styles/projects_page.css"

export default function ProjectsPage(){
    return(
        <>
            <div className="page-content">
                <NavBar active="projectsPage"/>
                <div className="content-wrapper">
                    <div className="projects-page-container">
                        <div className="projects-page-header">
                            <div className="title projects-page-title">
                                My Projects
                            </div>
                            <div className="subtitle projects-page-subtitle">
                                Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience in my journey as a developer.
                            </div>
                        </div>
                        <div className="projects-content">
                            <AllProjects/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}