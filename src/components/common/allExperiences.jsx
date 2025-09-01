import React from "react";
import Experience from "./experience";
import INFO from "../../data/user";
import "./styles/experience.css";

const AllExperiences = () => {
	return (
		<div className="all-experiences-container">
			{INFO.experiences.map((experience, index) => (
				<div className="all-experiences-item" key={index}>
					<Experience
						logo={experience.logo}
						title={experience.title}
						company={experience.company}
						location={experience.location}
						duration={experience.duration}
						description={experience.description}
						technologies={experience.technologies}
					/>
				</div>
			))}
		</div>
	);
};

export default AllExperiences;
