import NavBar from "../components/common/navBar"
import AllProjects from "../components/projects/allProjects"


export default function ProjectsPage(){
    return(
        <>
            <div className="page-content">
                <NavBar active="projectsPage"/>
                <AllProjects/>
                <h1>This is the project page</h1>
            </div>
        </>
    )
}