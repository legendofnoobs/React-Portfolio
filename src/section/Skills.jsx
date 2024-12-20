import { motion } from "framer-motion"

import Card from "../components/Card"
import { technologies } from "../data"

const liStyle = "text-2xl max-[636px]:text-lg mb-1"
const Skills = () => {
	return (
		<motion.div 
			className="max-w-[100rem] py-10 min-h-fit bg-black/10 backdrop-blur-lg rounded-xl px-7"
			transition={{ delay: 0.3 }} // Add delay here
			viewport={{ once: true }}
		>
			<h1 className="text-5xl text-center mb-16 font-bold">Skills</h1>
			<div className="flex justify-between max-[638px]:flex-col max-[994px]:flex-col max-[994px]:gap-y-5">
				<div className="flex flex-wrap gap-8 w-3/6 max-[638px]:w-full max-[638px]:justify-center max-[994px]:w-full max-[994px]:justify-center">
					{technologies.map(function(tech, index) {
						return (
							<motion.div 
								key={tech.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }} // Delay each card
								viewport={{ once: true }}
							>
								<Card imgURL={tech.imgURL} />
							</motion.div>
						)
					})}
				</div>
				<div className="w-3/6 max-[638px]:w-full max-[994px]:w-full">
					<div className="p-5">
						<motion.h2 
							className="text-3xl font-bold"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.6 }} // Add delay for the heading
							viewport={{ once: true }}
						>
							Additional Skills:
						</motion.h2>
						<motion.ul 
							className="pl-6 list-disc text-xl leading-9"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.8 }} // Add delay for the list
							viewport={{ once: true }}
						>
							<li className={liStyle}>JSON</li>
							<li className={liStyle}>Basic Git</li>
							<li className={liStyle}>Version Control</li>
							<li className={liStyle}>Data Structures</li>
							<li className={liStyle}>SQL and Databases</li>
							<li className={liStyle}>Basic Linux Commands</li>
							<li className={liStyle}>Agile Software Development</li>
							<li className={liStyle}>Object Oriented Programming</li>
							<li className={liStyle}>Good Knowledge of Software Process And Life Cycle</li>
							<li className={liStyle}>Good Knowledge of Software Requirements and Specification</li>
						</motion.ul>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Skills
