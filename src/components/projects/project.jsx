import React from "react";

import "./styles/project.css";


export default function Project(props){
	const { logo, logo1, title, description, linkText, link } = props;
	
	function Image(src){
		if(!src){
			return null;
		}
		return <img src={src} alt="logo"/>;
	}

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						{Image(logo)}
						{Image(logo1)}
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
