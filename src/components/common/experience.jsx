import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/experience.css";

export default function Experience(props) {
	const { logo, title, company, location, duration, description, technologies, projects } = props;
	
	return (
		<div className="experience">
			<div className="experience-container">
				<div className="experience-header">
					<div className="experience-logo">
						<img src={logo} alt="company logo" />
					</div>
					<div className="experience-info">
						<div className="experience-title">{title}</div>
						<div className="experience-company">{company}</div>
						<div className="experience-location">{location}</div>
						<div className="experience-duration">{duration}</div>
					</div>
				</div>
				<div className="experience-description">{description}</div>
				<div className="experience-technologies">
					{technologies}
				</div>
				{projects && projects.length > 0 && (
					<div className="experience-projects">
						<div className="experience-projects-label">View projects:</div>
						<div className="experience-projects-buttons">
							{projects.map((projectSlug) => {
								const project = INFO.projects.find((p) => p.slug === projectSlug);
								return (
									<Link 
										key={projectSlug} 
										to={`/projects/${projectSlug}`}
										className="experience-project-button"
									>
										{project ? project.title : projectSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
									</Link>
								);
							})}
						</div>
					</div>
				)}

			</div>
		</div>
	);
}
