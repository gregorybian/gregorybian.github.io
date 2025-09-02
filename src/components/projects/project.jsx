import React from "react";
import Logo from "../common/logo";
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
					<div className="project-logo-container">
						<div className="project-logo">
							{logo.map((image) => <Logo key={image.key} src={image.url} text={image.name}/>)}
						</div>
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<a href={link} target="_blank" rel="noopener noreferrer" className="project-link-text">{linkText}</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
