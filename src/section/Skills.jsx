import Card from "../components/Card"
import { technologies } from "../data"

const Skills = () => {
	return (
		<div className="max-w-6xl m-auto py-10 min-h-fit">
			<h1 className="text-5xl text-center mb-16 font-bold">Skills</h1>
			<div className="flex justify-between max-[638px]:flex-col max-[994px]:flex-col max-[994px]:gap-y-5">
				<div className=" flex flex-wrap gap-10 w-3/6 max-[638px]:w-full max-[638px]:justify-center max-[994px]:w-full max-[994px]:justify-center">
					{technologies.map(function(tech){
						return <Card key={tech.name} imgURL={tech.imgURL} />
					})}
				</div>
				<div className="w-3/6 max-[638px]:w-full max-[994px]:w-full">
					<div className="transition ease hover:bg-white/30 p-5 rounded-lg backdrop-blur-sm">
						<h2 className="text-3xl font-bold">
							Additional Skills :
						</h2>
						<ul className="pl-6 list-disc text-xl leading-9">
							<li>JSON</li>
							<li>Basic Git</li>
							<li>Version Control</li>
							<li>Data Structures</li>
							<li>SQL and Databases</li>
							<li>Basic Linux Commands</li>
							<li>Agile Software Development</li>
							<li>Object Oriented Programming</li>
							<li>Good Knowledge of Software Process And Life Cycle</li>
							<li>Good Knowledge of Software Requirements and Specification</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills