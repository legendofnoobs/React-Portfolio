/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import test from "../assets/projects assets/Nike Landing.png"
import { projectsData } from "../data"


const ProjectCard = (props) => {
	return (
		<div className=" max-w-lg hover:bg-black/10 p-5 rounded-xl transition ease hover:backdrop-blur-lg flex flex-col justify-between max-[994px]:w-1/2 max-[638px]:w-full max-[638px]:text-sm border border-transparent hover:border-white/10 hover:transform hover:scale-105 max-[994px]:scale-0 max-[994px]:hover:transform">
			<div>
				<div className="mb-5">
					<img className=" rounded-xl" src={props.imgURL} alt="project Photo"/>
				</div>
				<div className="mb-5">
					<h2 className="text-3xl mb-2 max-[638px]:text-2xl max-[638px]:font-bold font-bold">{props.title}</h2>
					<p className=" text-xl mb-5 max-[638px]:text-md">{props.description}</p>
					<div className="flex gap-x-2">
					{props.usedTech.map(function(tech, index){
						return <p key={index} className="bg-white/10 px-4 py-1 rounded-full flex-wrap">{tech}</p>
					})}
					</div>
				</div>
			</div>
			<div className="flex gap-x-5 z-30 min-w-fit">
				<a target="_blank" rel="noopener noreferrer" href={props.live} aria-label="visit live website">
					<i className="fa-solid fa-link text-2xl"></i>
				</a>
				<a target="_blank" rel="noopener noreferrer" href={props.gitHUB} aria-label="visit the repository">
					<i className="fa-brands fa-github text-2xl"></i>
				</a>
			</div>
		</div>
	)
}

export default ProjectCard