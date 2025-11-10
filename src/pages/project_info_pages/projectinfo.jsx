import { Navigate, useParams } from "react-router-dom";
import MiniSudokuSolver from "./MiniSudokuSolver";
import PortfolioSite from "./PortfolioSite";
import OddsTracker from "./OddsTracker";
import ExpenseTracker from "./ExpenseTracker";
import HandHygieneCompliance from "./HandHygieneCompliance";
import PhysicsIA from "./PhysicsIA";
import ChemIA from "./ChemIA.jsx"
import MathIA from "./MathIA.jsx"
import DRD_Firmware from "./DRD_Firmware.jsx";
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
		"physics-ia": PhysicsIA,
		"chem-ia": ChemIA,
		"math-ia": MathIA,
		"drd-firmware": DRD_Firmware
	};

	const ProjectComponent = projectComponents[slug];

	if (!ProjectComponent) {
		return <Navigate to="/projects" replace />;
	}

	return <ProjectComponent />;
}