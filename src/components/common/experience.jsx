import React from "react";
import "./styles/experience.css";

export default function Experience(props) {
	const { logo, title, company, location, duration, description, technologies } = props;
	
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
					{technologies.map((tech, index) => (
						<span key={index} className="experience-tech-tag">
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
