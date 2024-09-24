import ReactLogo from "../assets/tech/react.webp";
import BootstrapLogo from "../assets/tech/bootstrap.webp";
import CppLogo from "../assets/tech/C++-Logo.wine.webp";
import CssLogo from "../assets/tech/css.webp";
import FigmaLogo from "../assets/tech/figma.webp";
import GitHubLogo from "../assets/tech/GitHub-Logo.webp";
import HtmlLogo from "../assets/tech/HTML5_badge.webp";
import JavaLogo from "../assets/tech/java-logo-vector.webp";
import JsLogo from "../assets/tech/js.webp";
import LinuxLogo from "../assets/tech/linux.webp";
import MySqlLogo from "../assets/tech/MySQL.webp";
import NodeLogo from "../assets/tech/node.webp";
import NpmLogo from "../assets/tech/npm-logo.png";
import TailwindLogo from "../assets/tech/tailwindcss.png";
import ViteLogo from "../assets/tech/vite-shadow.png";


export const technologies = [
	{ name: "React", imgURL: ReactLogo },
	{ name: "Bootstrap", imgURL: BootstrapLogo },
	{ name: "C++", imgURL: CppLogo },
	{ name: "CSS", imgURL: CssLogo },
	{ name: "Figma", imgURL: FigmaLogo },
	{ name: "GitHub", imgURL: GitHubLogo },
	{ name: "HTML", imgURL: HtmlLogo },
	{ name: "JAVA", imgURL: JavaLogo },
	{ name: "JAVASCRIPT", imgURL: JsLogo },
	{ name: "Linux", imgURL: LinuxLogo },
	{ name: "MySql", imgURL: MySqlLogo },
	{ name: "Node.js", imgURL: NodeLogo },
	{ name: "NPM", imgURL: NpmLogo },
	{ name: "Tailwind CSS", imgURL: TailwindLogo },
	{ name: "Vite", imgURL: ViteLogo },
];

export const Pitems = {
	p1: "As a last-year software engineering student, I want to focus on learning Full Stack technologies. I am seeking an internship or job where I can apply my technical skills and knowledge to real-world projects.",
	p2: "With experience in programming languages such as JavaScript, Java and a strong understanding of software development methodologies. I am confident in my ability to contribute to a dynamic and innovative team.",
	p3: "I am open to learn more new technologies to help me in development. My goal is to gain practical experience in software engineering and to develop the skills necessary to become a successful Senior.",
	p4: "My ultimate goal is to gain valuable industry experience, sharpen my technical expertise, and build the foundation needed to eventually grow into a Senior Software Engineer role. I am committed to continuous learning and professional development to stay at the forefront of the rapidly evolving tech landscape."
};

// =================================================================
import AdviceApp from "../assets/projects assets/Advice app.webp";
import Calculator from "../assets/projects assets/Calculator.webp";
import CalorieCounter from "../assets/projects assets/Calorie counter.webp";
import Cover from "../assets/projects assets/Cover.webp";
import MusicPlayer from "../assets/projects assets/Music Player.webp";
import NikeLanding from "../assets/projects assets/Nike Landing.png";
import PalindromeChecker from "../assets/projects assets/Palindrome Cheker.webp";
import SpaceTourism from "../assets/projects assets/Space tourism.webp";
import TodoApp from "../assets/projects assets/Todo app.webp";
import WeatherApp from "../assets/projects assets/Weather app.webp";
import PortfolioV1 from "../assets/projects assets/PortfolioV1.webp"
import grillandgo from "../assets/projects assets/grillandgo.png"


import groovePdf from "../assets/pdf/GrooveMusicApp.pdf"



export const projectsData = [
	{
		id:"1",
		imgURL:SpaceTourism,
		title:"Space Tourism website",
		description:"Space tourism website to demonstrate skills. It was a challenge on Frontend Mentor. It is Fully functional and responsive",
		live:"https://spacetourismwebsitelegendofnoobs.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/Nike-landing",
		usedTech:["HTML", "CSS", "JavaScript"]
	},
	{
		id:"2",
		imgURL:WeatherApp,
		title:"Weather App",
		description:"A simple Weather app to demonstrate JavaScript skills. Made this app as an individual project before college requested a web development course's project and just handed it 💀. It is Fully functional and responsive",
        live:"https://weatherapplegendofnoobs.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/WeatherApp",
		usedTech:["HTML", "CSS", "JavaScript"]
	},
	{
		id:"3",
		imgURL:NikeLanding,
		title:"Nike Landing website",
		description:"A simple Nike Landing page to demonstrate Tailwind CSS and React skills. It is fully functional and responsive.",
        live:"https://nikelandingnoob.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/Space-Tourism-website---Copy",
		usedTech:["React.JS", "Tailwind CSS"]
	},
	{
		id:"4",
		imgURL:TodoApp,
		title:"Todo App",
		description:"A simple Todo app to demonstrate JavaScript and React skills. It is Fully functional and responsive",
        live:"https://todoappahemdali.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/todo-app",
		usedTech:["React.js", "CSS"]
	},
	{
		id:"12",
		imgURL:grillandgo,
		title:"grill & go website",
		description:"A simple restaurant website to demonstrate React.js and Tailwind.css skills. It is Fully functional and responsive",
		live:"https://grillandgo.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/restaurant-webpage",
		usedTech:["React.js", "Tailwind.css"]
	},
	{
		id:"5",
		imgURL:Cover,
		title:"A Music App Design",
		description:"For Human Computer Interaction's course, I worked on this project with my colleagues to make a good looking UI inspired by Apple music and Spotify.",
        live:"https://www.figma.com/design/SzKp1UwvKAnQsD3bWHa3bO/Music-App?node-id=342-2844&t=WeRZnyluR6u0aXvo-1",
		gitHUB:groovePdf,
		usedTech:["Figma"]
	},
	{
		id:"6",
		imgURL:MusicPlayer,
		title:"Music Player website",
		description:"A simple Music app to demonstrate my skills in JavaScript and CSS. Some music to chill and keep calm. It is Fully functional and responsive",
        live:"https://musicplayerlegendofnoobs.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/music-player",
		usedTech:["HTML", "CSS", "JavaScript"]
	},
	{
		id:"7",
		imgURL:Calculator,
		title:"Calculator App",
		description:"A simple calculator app to demonstrate JavaScript skills. It is Fully functional and responsive",
        live:"https://calculatorlegendofnoobs.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/Calculator",
		usedTech:["HTML", "CSS", "JavaScript"]
	},
	{
		id:"8",
		imgURL:CalorieCounter,
		title:"Calorie Counter App",
		description:"A simple calorie counter app to keep on track with your diet. It is Fully functional and responsive",
        live:"https://caloriecounterlegendofnoobs.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/Calorie-Counter",
		usedTech:["HTML", "CSS", "JavaScript"]
	},
	{
		id:"9",
		imgURL:AdviceApp,
		title:"Advice App",
		description:"A simple Advice app to demonstrate JavaScript and API skills. It is fully functional and responsive.",
        live:"https://adviceapplegendofnoobs.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/AdviceApp",
		usedTech:["HTML", "CSS", "JavaScript"]
	},
	
	{
		id:"10",
		imgURL:PalindromeChecker,
		title:"Palindrome Checker website",
		description:"A simple Palindrome Checker app to demonstrate JavaScript array skills. It is Fully functional and responsive",
		live:"https://palindromecheckerlegendofnoobs.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/Palindrome-Checker",
		usedTech:["HTML", "CSS", "JavaScript"]
	},
	{
		id:"11",
		imgURL:PortfolioV1,
		title:"PortfolioV1 website",
		description:"A simple PortfolioV1 to demonstrate HTML and CSS skills. It is Fully functional and responsive",
        live:"https://ahmedalirashed.netlify.app/",
		gitHUB:"https://github.com/legendofnoobs/Portfolio",
		usedTech:["HTML", "CSS"]
	},
]