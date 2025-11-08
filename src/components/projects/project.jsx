import React from "react";
import { Link } from "react-router-dom";
import Logo from "../common/logo";
import "./styles/project.css";


export default function Project(props){
	const { logo, title, description, linkText, slug } = props;
	
	function Image(src){
		if(!src){
			return null;
		}
		return <img src={src} alt="logo"/>;
	}

	return (
		<React.Fragment>
			<div className="project">
				<Link to={`/projects/${slug}`} className="project-link-wrapper">
					<div className="project-container">
						<div className="project-logo-container">
							<div className="project-logo">
								{logo.map((image) => <Logo key={image.key} src={image.url} text={image.name}/>)}
							</div>
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<span className="project-link-text">{linkText}</span>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};
