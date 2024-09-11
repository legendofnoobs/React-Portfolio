/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import test from "../assets/projects assets/Nike Landing.png"
import { projectsData } from "../data"


const ProjectCard = (props) => {
	return (
		<div className=" max-w-xl hover:bg-white/10 p-5 rounded-xl transition ease hover:backdrop-blur-lg flex flex-col justify-between max-[994px]:w-1/2 max-[638px]:w-full max-[638px]:text-sm">
			<div>
				<div className="mb-5">
					<img className=" rounded-xl" src={props.imgURL}/>
				</div>
				<div className="mb-5">
					<h2 className="text-3xl mb-2 max-[638px]:text-2xl max-[638px]:font-bold">{props.title}</h2>
					<p className=" text-xl mb-5 max-[638px]:text-md">{props.description}</p>
					<div className="flex gap-x-2">
					{/* {props.usedTech.map((tech, index) => (<p key={index} className="bg-white/10 px-4 py-1 rounded-full">{tech}</p>)) */}
					{props.usedTech.map(function(tech, index){
						return <p key={index} className="bg-white/10 px-4 py-1 rounded-full flex-wrap">{tech}</p>
					})}
					</div>
				</div>
			</div>
			<div className="flex gap-x-5 z-30">
				<a target="_blank" rel="noopener noreferrer" href={props.live}>
					<i className="fa-solid fa-link text-2xl"></i>
				</a>
				<a target="_blank" rel="noopener noreferrer" href={props.gitHUB}>
					<i className="fa-brands fa-github text-2xl"></i>
				</a>
			</div>
		</div>
	)
}

export default ProjectCard