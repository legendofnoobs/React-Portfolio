import ProjectCard from "../components/ProjectCard"
import { projectsData } from "../data"

const Porjects = () => {
	return (
		<div className="max-w-6xl m-auto py-10 min-h-fit">
			<h1 className="text-5xl font-bold text-center mb-16">Projects</h1>
			<div className="flex flex-wrap justify-between gap-y-10 max-[1294px]:justify-center">
				{projectsData.map(function(project){
					return <ProjectCard 
						key={project.id} 
						imgURL={project.imgURL} 
						title={project.title} 
						description={project.description}
						live={project.live}
						gitHUB={project.gitHUB}
						usedTech={project.usedTech}
						/>
				})}
			</div>
		</div>
	)
}

export default Porjects