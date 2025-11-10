import { Link } from "react-router-dom";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import INFO from "../../data/user";
import "./projectinfo.css";


export default function PortfolioSite(){
	const project = INFO.projects.find((item) => item.slug === "portfolio-site");

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
							<p className="project-info-description">This portfolio is built using React with the Vite framework. It is hosted on GitHub Pages. I spent a lot of time customizing the design to be presentable and showcase my work, albeit some things can definitely be reworked (mobile optimized lol). Anyways, feel free to look through and click through this portfolio and check out all the features!</p>
						</div>
						<div className="project-info-body">
							<img src={project.image} alt="project image" style={{height: "26em"}} className="project-info-image" />
							<img src={project.image2} alt="project image" style={{height: "26em"}} className="project-info-image" />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

