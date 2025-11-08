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
							<h1 className="project-info-title">{project.title}</h1>
							<p className="project-info-description">LinkedIn posts a daily Sudoku puzzle. Unlike typical Sudoku puzzles featuring a 9x9 grid, LinkedIn shortened the puzzle to a 6x6 version to make it quicker to complete. As someone who is very competitive, I wrote this script to flex my top 1% score to all my friends. When LinkedIn displays my friends’ scores as 3+ minutes and mine as 30 seconds, I feel a sense pride knowing my computer engineering knowledge has not gone to waste.</p>
							</div>


						</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

