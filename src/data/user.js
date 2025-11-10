// Firmware
import Arduino from "../components/images/Arduino.png"
import stm32 from "../components/images/STM32.png"
import RaspberryPi from "../components/images/RaspberryPi.png"
import FreeRTOS from "../components/images/FreeRTOS.png"
import CAN from "../components/images/CAN.png"

// Hardware
import SystemVerilog from "../components/images/system_verilog.png"
import FPGA from "../components/images/FPGA.png"
import CircuitDesign from "../components/images/Circuitry.png"
import Soldering from "../components/images/Soldering.png"
import Oscilloscope from "../components/images/Oscilloscope.png"

// Data
import matplotlib from "../components/images/Matplotlib.png"
import pandas from "../components/images/pandas.png"
import excel from "../components/images/Excel.png"
import matlab from "../components/images/matlab.png"
import numpy from "../components/images/NumPy.png"
import opencv from "../components/images/opencv.png"

// Webdev
import nodejs from "../components/images/NodeJS.png"

// PDFs
import finalreport from "../components/images/Final_Recommendation_Report.pdf"
import physicsia from "../components/images/physics_ia.pdf"
import chemia from "../components/images/Chem_IA.pdf"
import mathia from "../components/images/Math_IA.pdf"

// Experience Images
import ubcsolar from "../components/images/ubcsolarlogo.jpg"
import geeringup from "../components/images/geeringup.png"
import ubc from "../components/images/ubc.png"

// Project Images
import opencv_code from "./projectimages/MiniSudoku_Image.png"
import react_meme from "./projectimages/React-meme.jpg"
import react_meme2 from "./projectimages/React-meme2.jpg"

// Project Videos
import miniSudokuSolverVideo from "./projectimages/MiniSudoku_Video.mp4"

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
			"I am a second-year Computer Engineering Student at UBC. My current area of passion is in firmware and embedded systems. However, I have a diverse skill set as shown in my digital toolbox and am always looking for new challenges and opportunities to grow as a developer.",
		description2: 
			"Outside of academics, I enjoy playing sports. Whether that be working out, competing in ultimate frisbee, or playing hockey, I welcome competition and pushing myself to improve. You can find some of my favorite projects and my contact details below!"
	},

	firmware:[
		{key: 1, name: "C", url:"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.png"},
		{key: 2, name: "STM32", url: stm32},
		{key: 3, name: "Arduino", url: Arduino},
		{key: 4, name: "Raspberry Pi", url: RaspberryPi},
		{key: 5, name: "FreeRTOS", url: FreeRTOS},
		{key: 6, name: "CAN", url: CAN},
	],
	hardware:[
		{key: 1, name: "System Verilog", url: SystemVerilog},
		{key: 2, name: "FPGA", url: FPGA},
		{key: 3, name: "Oscilloscope", url: Oscilloscope},
		{key: 4, name: "Circuit Design", url: CircuitDesign},
		{key: 5, name: "Soldering", url: Soldering},
	],
	data:[
		{key: 1, name: "Java", url:"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png"},
		{key: 3, name: "Python", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png"},
		{key: 4, name: "Numpy", url: numpy},
		{key: 5, name: "Matplotlib", url: matplotlib},
		{key: 6, name: "Pandas", url: pandas},
		{key: 7, name: "Excel", url: excel},
		{key: 8, name: "Matlab", url: matlab},
		{key: 9, name: "OpenCV", url: opencv}
	],
	webdev:[
		{key: 1, name: "HTML", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png"},
		{key: 2, name: "CSS", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png"},	
		{key: 3, name: "JavaScript", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.png"},
		{key: 4, name: "Typescript", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png"},		
		{key: 5, name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"},
		{key: 6, name: "Node.js", url: nodejs},
	],

	

	experiences: [
		{
			title: "Embedded Firmware Developer",
			company: "UBC Solar",
			location: "Vancouver, BC",
			duration: "Sept 2025 - Present",
			description: "Developing firmware for UBC Solar's 4th-generation car, Cascadia, using a Hardware Abstraction Layer (HAL) in embedded C on STM32 microcontrollers and communicating over a Controlled Area Network (CAN) bus communication protocol.",
			technologies: [
				{key: 1, name: "STM32", url: stm32},
				{key: 2, name: "C", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.png"},
				{key: 3, name: "CAN", url: CAN},
				{key: 4, name: "FreeRTOS", url: FreeRTOS},
				{key: 5, name: "Circuit Design", url: CircuitDesign},
			],
			projects: ["drd-firmware"],
			logo: ubcsolar
		},
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
			slug: "mini-sudoku-solver",
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
			image: opencv_code,
			video: miniSudokuSolverVideo
		},
		{
			slug: "drd-firmware",
			title: "UBC Solar Driver Dashboard",
			description:
				"Firmware developed in C for the driver dashboard of UBC Solar's 4th generation car, Cascadia focused on improving driver awareness at competition.",
			logo: [
				{key: 1, name: "STM32", url: stm32},
				{key: 2, name: "C", url: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/c/c.png"},
				{key: 3, name: "CAN", url: CAN},
				{key: 4, name: "FreeRTOS", url: FreeRTOS},
				{key: 5, name: "Circuit Design", url: CircuitDesign},
			],
			linkText: "View Project",
			link: "https://github.com/UBC-Solar/firmware_v3/tree/redesign_layout/components/drd/Core/Src",
			image: opencv_code
		},
		{
			slug: "portfolio-site",
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
			image: react_meme,
			image2: react_meme2
		},

		{
			slug: "odds-tracker",
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
			slug: "expense-tracker",
			title: "Expense Tracker",
			description:
				"Expense tracking application created in 2022 to monitor income and expenditures, enabling better financial management and budgeting.",
			logo: [{key: 1, name: "Java", url:"https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png"}],
			linkText: "View Project",
			link: "https://github.com/gregorybian/Expense_Tracker",
		},
		{
			slug: "hand-hygiene-compliance",
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
		{
			slug: "physics-ia",
			title: "Temperature Effect on Spring Constant Research Paper",
			description:
				"Physics Research Paper on the effect of Temperature on the spring constant of a spring with a focus on accurate data collection and processing and reasonable results.",
			logo: [

			],
			linkText: "View Project",
			link: physicsia
		},
		{
			slug: "math-ia",
			title: "Mathematical Exploration of Temperature within a Thermoflask Research Paper",
			description:
				"Mathematical Research Paper on Temperature as a function of time within a thermoflask. Used heat-transfer equations and Calculus to explore water heating up in my thermoflask",
			logo: [

			],
			linkText: "View Project",
			link: mathia
		},
		{
			slug: "chem-ia",
			title: "Temperature Effect on Rate of Reaction Research Paper",
			description:
				"Chemistry Research Paper on the dependance of temperature on the rate of reaction of calcium carbonate and hydrochloric acid in a eudiometer setup.",
			logo: [

			],
			linkText: "View Project",
			link: chemia
		},
	],
};

export default INFO;
