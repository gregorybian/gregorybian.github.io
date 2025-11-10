import { Link } from "react-router-dom";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import INFO from "../../data/user";
import "./projectinfo.css";


export default function HandHygieneCompliance(){
	const project = INFO.projects.find((item) => item.slug === "hand-hygiene-compliance");

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
								{project.link && (
									<a href={project.link} target="_blank" rel="noopener noreferrer" className="project-info-cta">View Report</a>
								)}
							</div>
							<p className="project-info-description">This project helped me apply the engineering design process. The entire process is detailed in the report below and has helped my understand what it is like to take on projects and work within a team.</p>
						</div>
						{project.link && (
							<div className="project-info-body" style={{ marginTop: "40px" }}>
								<iframe 
									src={project.link} 
									className="project-info-image" 
									style={{ height: "800px", width: "100%", border: "none" }}
									title="Hand Hygiene Compliance Report"
								/>
							</div>
						)}
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

