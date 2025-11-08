import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/highlightedProjects.css";

const HighlightedProjects = () => {
	// Get the first 3 projects as highlighted projects
	const highlightedProjects = INFO.projects.slice(0, 3);
	
	return (
		<div className="all-projects-container">
			{highlightedProjects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						slug={project.slug}
					/>
				</div>
			))}
		</div>
	);
};

export default HighlightedProjects;
