import illustration from "../assets/illustration.svg";
import Button from "../components/Button";
import { Pitems } from "../data";

const About = () => {

	const pStyle = "mb-1 text-lg p-3 cursor-pointer transition ease"
	return (
		<div className=" max-w-6xl m-auto py-10 min-h-fit bg-black/10 backdrop-blur-lg rounded-xl px-5">
			<h1 className="text-5xl text-center mb-5 font-bold">ABOUT</h1>
			<div className=" flex gap-20 max-[638px]:flex-col max-[994px]:flex-col">
				<div className=" w-6/12 sm:w-full sm:justify-center max-[638px]:w-full">
					<p className={pStyle}>{Pitems.p1}</p>
					<p className={pStyle}>{Pitems.p3}</p>
					<p className={pStyle}>{Pitems.p4}</p>
					<div className=" p-3 cursor-pointer transition ease">
						<h2 className="text-2xl text-extrabold mb-3">Certifications :</h2>
						<ul className=" pl-5 list-disc">
							<li>Web Design Certification - FreeCodeCamp.</li>
							<li>JavaScript Certification – FreeCodeCamp.</li>
							<li>FullStack with ASP Core .NET – CLS Solutions. (In Progress)</li>
							<li>Software Engineering Bachelor. (In Progress)</li>
						</ul>
					</div>
				</div>
				<div className=" w-6/12 flex flex-col justify-start gap-10 p-3 sm:w-full sm:justify-center max-[638px]:w-full max-[638px]:hidden">
					<div>
						<img className=" rounded-2xl w-full h-auto" width="500" height="500" src={illustration} loading="lazy"/>
					</div>
					<div className=" min-h-fit sm:flex sm:justify-center max-[638px]:justify-center">
						<Button/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
