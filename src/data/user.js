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
import geeringup from "../components/images/geeringup.png"
import ubc from "../components/images/ubc.png"
import opencv from "../components/images/opencv.png"
import finalreport from "../components/images/Final_Recommendation_Report.pdf"


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
			"Outside of academics, I enjoy playing sports. Whether that be working out, competing in ultimate frisbee, or playing hockey, I welcome competition and pushing myself to improve. You can find some of my favorite projects and my contact details below."
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
			title: "STEM Outreach Facilitator",
			company: "University of British Columbia",
			location: "Vancouver, BC",
			duration: "Jun 2025 - Aug 2025",
			description: "Taught hands-on, interactive STEM workshops on topics such as the Fundamentals of JavaScript, Computer Vision, and Machine Learning, making complex concepts fun and approachable for youth.",
			technologies: [
				{key: 1, name: "HTML", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png"},
				{key: 2, name: "CSS", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png"},	
				{key: 3, name: "JavaScript", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png"},
				{key: 4, name: "Python", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"}
			],
			logo: geeringup
		},
		{
			title: "UVIC Aero Software Team Member",
			company: "University of Victoria",
			location: "Victoria, BC",
			duration: "Jan 2025 - June 2025",
			description: "Worked in an 8-member software team to develop an autonomous fire-extinguishing drone. Leveraged a Python-based hotspot detection algorithm for infrared images, implementing thresholding and connected componenets analysis to detect and filter bright regions.",
			technologies: [
				{key: 1, name: "Python", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"},
				{key: 2, name: "Arduino", url: Arduino},
				{key: 3, name: "OpenCV", url: opencv},
				{key: 4, name: "Raspberry Pi", url: RaspberryPi},
				{key: 5, name: "Circuit Design", url: CircuitDesign},
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"
		},
		{
			title: "UBC Physics Olympics Team Captain",
			company: "Sir Winston Churchill Secondary School",
			location: "Vancouver, BC",
			duration: "Han 2024 - Apr 2024",
			description: "Led a team of 14 students in engineering a solar-powered car using Python and Arduino, optimizing capacitor efficiency, and ensuring compliance with competition guidelines to drive success in the UBC Physics Olympics.",
			technologies: [
				{key: 1, name: "Arduino", url: Arduino},
				{key: 2, name: "Raspberry Pi", url: RaspberryPi},
				{key: 3, name: "C++", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.png"},
				{key: 4, name: "Python", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"},
				{key: 5, name: "Circuit Design", url: CircuitDesign},
			],
			logo: ubc
		}
	],

	
	projects: [
		{
			title: "Mini-Sudoku Solver",
			description:
				"A mini-sudoku solver that uses OpenCV and Pytesseract Python Libraries to extract and solve sudoku puzzles from images of Linkedln Mini-Sudoku puzzles, achieving a top time everyday.",
			logo: [
				{key: 1, name: "Python", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"},
				{key: 2, name: "OpenCV", url: opencv},
				{key: 3, name: "Numpy", url: numpy}
			],
			linkText: "View Project",
			link: "https://github.com/gregorybian/Mini-Sudoku-Solver",
		},
		{
			title: "This Portfolio!",
			description:
				"This portfolio is built using React and Vite and is hosted on GitHub Pages. I aimed to build a simple, minimalistic portfolio that showcases my projects and experiences.",
			logo: [
				{key: 1, name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"},
				{key: 2, name: "JavaScript", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"},
				{key: 3, name: "HTML", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"},
				{key: 4, name: "CSS", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png"},
				{key: 5, name: "Vite", url: "https://vite.dev/logo.svg"},
				{key: 6, name: "GitHub Pages", url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},
			],
			linkText: "View Project",
			link: "https://github.com/gregorybian/gregorybian.github.io",
		},

		{
			title: "Real-Time Sports Betting Odds Tracker",
			description:
				"Real-time sports betting odds tracking Python Script created to monitor changes in odds for various sports using the BeautifulSoup library, enabling better betting decisions.",
			logo: [
				{key: 1, name: "Python", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"},
				{key: 2, name: "HTML", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"},
			],
			linkText: "View Project",
			link: "https://github.com/gregorybian/Sportsbetting_Webscraper",
		},

		{
			title: "Expense Tracker",
			description:
				"Expense tracking application created in 2022 to monitor income and expenditures, enabling better financial management and budgeting.",
			logo: [{key: 1, name: "Java", url:"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png"}],
			linkText: "View Project",
			link: "https://github.com/gregorybian/Expense_Tracker",
		},
		{
			title: "Hand Hygiene Compliance System",
			description:
				"Prototype embedded system designed to monitor hand hygiene compliance in hospitals using a Raspberry Pi, infrared and ambient light sensors and LED indicators.",
			logo: [
				{key: 1, name: "Python", url:"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"},
				{key: 2, name: "Raspberry Pi", url: RaspberryPi}
			],
			linkText: "View Project",
			link: finalreport,
		},
	],
};

export default INFO;
