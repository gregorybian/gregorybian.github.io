import { Link } from "react-router-dom";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import INFO from "../../data/user";
import "./projectinfo.css";


export default function MathIA(){
	const project = INFO.projects.find((item) => item.slug === "math-ia");

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
							<p className="project-info-description">I wrote the majority of this paper when I had a concussion because I couldn't get an extension. Was still a fun exploration and helped me understand applications of calculus in the real world.</p>
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

