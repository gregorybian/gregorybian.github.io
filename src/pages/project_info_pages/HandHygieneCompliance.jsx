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
							<h1 className="project-info-title">{project.title}</h1>
							<p className="project-info-description">{project.description}</p>
						</div>
						<div className="project-info-body">
							{project.image && (
								<img src={project.image} alt="project image" className="project-info-image" />
							)}
							<div className="project-info-logos">
								{project.logo?.map((image) => (
									<Logo key={image.key} src={image.url} text={image.name} />
								))}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

