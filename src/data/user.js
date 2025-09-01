import numpy from "../components/images/NumPy.png"
import nodejs from "../components/images/NodeJS.png"
import nextjs from "../components/images/NextJS.png"
import tailwind from "../components/images/Tailwind.png"
import matplotlib from "../components/images/Matplotlib.png"
import pandas from "../components/images/pandas.png"
import excel from "../components/images/Excel.png"
import matlab from "../components/images/matlab.png"
import Arduino from "../components/images/Arduino.png"
import RaspberryPi from "../components/images/RaspberryPi.png"
import CircuitDesign from "../components/images/Circuitry.png"
import Soldering from "../components/images/Soldering.png"
import AutoCAD from "../components/images/AutoCAD.png"
import Oscilloscope from "../components/images/Oscilloscope.png"


const INFO = {
	main: {
		title: "Reactfolio by Gregory",
		name: "Gregory B.",
	},

	socials: {
		github: "https://github.com/gregorybian",
		linkedin: "https://www.linkedin.com/in/gregorybian/",
		instagram: "https://instagram.com/gregorybian",
		email: "gregorybian100@gmail.com",
	},

	homepage: {
		title: "Hey There! I'm",
		highlight: "Gregory Bian!",
		description:
			"I am a second year Computer Engineering Student at UBC. My current area of passion is in Data Analysis and Machine Learning. However, I have a diverse skill set as shown in my digital toolbox and am always looking for new challenges and opportunities to grow as a developer.",
		description2: 
			"Outside of academics, I enjoy playing sports. Whether that be working out, playing hockey, or play ultimate frisbee, I welcome competition and pushing myself to improve. You can find my contact details below."
	},

	webdev:[
		{key: 1, name: "HTML", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png"},
		{key: 2, name: "CSS", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png"},	
		{key: 3, name: "JavaScript", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png"},
		{key: 4, name: "Typescript", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png"},		
		{key: 5, name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"},
		{key: 6, name: "Node.js", url: nodejs},
		{key: 7, name: "Next.js", url: nextjs},
		{key: 8, name: "Tailwind CSS", url: tailwind}
	],

	data:[
		{key: 1, name: "Java", url:"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png"},
		{key: 2, name: "C", url:"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.png"},
		{key: 3, name: "Python", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"},
		{key: 4, name: "Numpy", url: numpy},
		{key: 5, name: "Matplotlib", url: matplotlib},
		{key: 6, name: "Pandas", url: pandas},
		{key: 7, name: "Excel", url: excel},
		{key: 8, name: "Matlab", url: matlab},
	],

	hardware:[
		{key: 1, name: "Arduino", url: Arduino},
		{key: 2, name: "Raspberry Pi", url: RaspberryPi},
		{key: 3, name: "Circuit Design", url: CircuitDesign},
		{key: 4, name: "Soldering", url: Soldering},
		{key: 5, name: "AutoCAD", url: AutoCAD},
		{key: 6, name: "Oscilloscope", url: Oscilloscope},

	],

	experiences: [
		{
			title: "Software Engineering Intern",
			company: "Tech Company Inc.",
			location: "Vancouver, BC",
			duration: "May 2024 - Aug 2024",
			description: "Developed full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
			technologies: ["React", "Node.js", "MongoDB", "Git"],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png"
		},
		{
			title: "Data Analysis Research Assistant",
			company: "UBC Engineering",
			location: "Vancouver, BC",
			duration: "Jan 2024 - Present",
			description: "Conducting research on machine learning algorithms for data analysis. Implementing and testing various ML models using Python and related libraries.",
			technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"
		},
		{
			title: "Hardware Design Project Lead",
			company: "UBC Capstone Project",
			location: "Vancouver, BC",
			duration: "Sep 2023 - Apr 2024",
			description: "Led a team of 4 students in designing and prototyping an IoT device using Arduino and Raspberry Pi. Managed project timeline and deliverables.",
			technologies: ["Arduino", "Raspberry Pi", "C++", "Python", "Circuit Design"],
			logo: Arduino
		}
	],

	
	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			logo1: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			logo1: null,
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
