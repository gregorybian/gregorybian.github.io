import { Link } from "react-router-dom";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import INFO from "../../data/user";
import "./projectinfo.css";


export default function MiniSudokuSolver(){
	const project = INFO.projects.find((item) => item.slug === "mini-sudoku-solver");

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
							<p className="project-info-description">LinkedIn posts a daily Sudoku puzzle. Unlike typical Sudoku puzzles featuring a 9x9 grid, LinkedIn shortened the puzzle to a 6x6 version to make it quicker to complete. As someone who is very competitive, I wrote this script to flex my top 1% score to all my friends. When LinkedIn displays my friends' scores as 3+ minutes and mine as 30 seconds, I feel a sense pride knowing my computer engineering knowledge has not gone to waste.</p>
							</div>
						<div className="project-info-body">
							<img src={project.image} alt="project image" style={{width: "26em"}} className="project-info-image" />
							<div className="project-info-description">
								<p className="project-info-description-text">Beyond friendly banter, this script features OpenCV’s library to threshold a colour intensity of each pixel to turn the image black and white, contour detection of the outer contour edges to find the main 4 corners of the sudoku grid, array slicing to isolate every individual number, and a library that processes each number.</p>
								<p className="project-info-description-text"> A major issue I had was in how to process the digits. If you know what a Neural Network is, you might have seen how hard it is for a computer to recognize a digit. Me not wanting to train my own machine learning model decided to use the Pytesseract library, which caused me many headaches when reading digits, as a 1 would be read as a 3 or a 0 would be read as a *. I got around these issues by isolating each number more clearly, but in hindsight, training a new model would have been far more effecient.</p>
							</div>
						</div>
						<div className="project-info-description">
								<p className="project-info-description-text">To solve the Sudoku puzzles, I implemented a backtracking algorithm which uses recursion to index through the grid, trying every number that works. If a value does not work, it “backtracks” to the previous number, tries a different value and continues to index until the puzzle is solved. Overall, this project was very interesting and enjoyable and I learned a lot from it! </p>
								<br/>
								<p className="project-info-subtitle"> <strong>Here is a video to demonstrate how the script works!</strong></p> <br/>
							</div>
						<div className="project-info-body">
							<video src={project.video} type="video/mp4" alt="project video" className="project-info-image" controls/>

							
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

