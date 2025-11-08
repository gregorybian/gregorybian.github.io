import { Navigate, useParams } from "react-router-dom";
import MiniSudokuSolver from "./MiniSudokuSolver";
import PortfolioSite from "./PortfolioSite";
import OddsTracker from "./OddsTracker";
import ExpenseTracker from "./ExpenseTracker";
import HandHygieneCompliance from "./HandHygieneCompliance";
import INFO from "../../data/user";


export default function ProjectInfo(){
	const { slug } = useParams();
	const project = INFO.projects.find((item) => item.slug === slug);

	if (!project) {
		return <Navigate to="/projects" replace />;
	}

	// Map slugs to their respective components
	const projectComponents = {
		"mini-sudoku-solver": MiniSudokuSolver,
		"portfolio-site": PortfolioSite,
		"odds-tracker": OddsTracker,
		"expense-tracker": ExpenseTracker,
		"hand-hygiene-compliance": HandHygieneCompliance,
	};

	const ProjectComponent = projectComponents[slug];

	if (!ProjectComponent) {
		return <Navigate to="/projects" replace />;
	}

	return <ProjectComponent />;
}