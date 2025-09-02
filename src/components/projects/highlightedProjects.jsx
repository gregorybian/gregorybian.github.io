import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import Logo from "../common/logo";
import "./styles/highlightedProjects.css";

const HighlightedProjects = () => {
	return (
		<div className="highlighted-projects-container">
			<div className="highlighted-projects-project">
				<Project
					logo={INFO.projects[0].logo}
					title={INFO.projects[0].title}
					description={INFO.projects[0].description}
					linkText={INFO.projects[0].linkText}
					link={INFO.projects[0].link}
				/>
				<Project
					logo={INFO.projects[1].logo}
					title={INFO.projects[1].title}
					description={INFO.projects[1].description}
					linkText={INFO.projects[1].linkText}
					link={INFO.projects[1].link}
				/>
				<Project
					logo={INFO.projects[2].logo}
					title={INFO.projects[2].title}
					description={INFO.projects[2].description}
					linkText={INFO.projects[2].linkText}
					link={INFO.projects[2].link}
				/>
			</div>
		</div>
	);
};

export default HighlightedProjects;
