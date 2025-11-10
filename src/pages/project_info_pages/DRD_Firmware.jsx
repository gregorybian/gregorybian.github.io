import { Link } from "react-router-dom";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import INFO from "../../data/user";
import "./projectinfo.css";


export default function DRD_Firmware(){
	const project = INFO.projects.find((item) => item.slug === "drd-firmware");

	if (!project) {
		return null;
	}

	return(
		<>
			<div className="page-content">
				<NavBar active="projectsPage"/>
				<div className="content-wrapper">
					<div className="project-info-container">
						<div className="project-info-breadcrumb">
							<Link to="/projects" className="project-info-back">{"← Back to projects"}</Link>
						</div>
						<div className="project-info-header">
							<div className="project-info-badge">{"Project Spotlight"}</div>
							<div className="project-info-title-wrapper">
								<h1 className="project-info-title">{project.title}</h1>
								<a href={project.link} target="_blank" rel="noopener noreferrer" className="project-info-cta">View Source Code</a>
							</div>
							<p className="project-info-description">Coming soon...</p>
						</div>
						
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

