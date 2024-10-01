import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import { projectsData } from "../data"

const Projects = () => {
	return (
		<div className="max-w-6xl m-auto py-10 min-h-fit">
			<h1 className="text-5xl font-bold text-center mb-16">Projects</h1>
			<div className="flex flex-wrap justify-between gap-y-10 gap-x-0 max-[1294px]:justify-center">
				{projectsData.map(function(project, index){
					return (
						<motion.div 
							key={project.id}
							initial={{ opacity: 0, y: 100 }} // Starts outside the view (left)
							whileInView={{ opacity: 1, y: 0 }} // Animates into view
							viewport={{ once: true }} // Ensures the animation runs only once
							transition={{ duration: 0.5, delay: index * 0.1 }} // Add delay for each card
						>
							<ProjectCard 
								imgURL={project.imgURL} 
								title={project.title} 
								description={project.description}
								live={project.live}
								gitHUB={project.gitHUB}
								usedTech={project.usedTech}
							/>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
