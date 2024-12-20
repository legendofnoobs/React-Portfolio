/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = (props) => {
	return (
		<div className=" w-[30rem] p-5 rounded-xl transition ease  flex flex-col justify-between max-[994px]:w-full max-[638px]:w-full max-[638px]:text-sm h-full">
			<div>
				<div className="mb-5">
					<img className=" rounded-xl w-full h-auto" height="245" width="470" src={props.imgURL} alt="project Photo" loading="lazy"/>
				</div>
				<div className="mb-5">
					<h2 className="text-3xl mb-2 max-[638px]:text-2xl  font-bold">{props.title}</h2>
					<p className=" text-xl mb-5 max-[636px]:text-lg">{props.description}</p>
					<div className="flex gap-x-2 gap-y-2 flex-wrap">
					{props.usedTech.map(function(tech, index){
						return <p key={index} className="bg-white/10 px-4 py-1 rounded-full">{tech}</p>
					})}
					</div>
				</div>
			</div>
			<div className="flex gap-x-5 z-30 min-w-fit">
				<a target="_blank" rel="noopener noreferrer" href={props.live} aria-label="visit live website">
					<FontAwesomeIcon icon={faLink} className="text-2xl"/>
				</a>
				<a target="_blank" rel="noopener noreferrer" href={props.gitHUB} aria-label="visit the repository">
					<FontAwesomeIcon icon={faGithub} className="text-2xl" />
				</a>
			</div>
		</div>
	)
}

export default ProjectCard