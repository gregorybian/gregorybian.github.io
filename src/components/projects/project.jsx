import React from "react";

import "./styles/project.css";


export default function Project(props){
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<a src={link} className="project-link-text">{linkText}</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
