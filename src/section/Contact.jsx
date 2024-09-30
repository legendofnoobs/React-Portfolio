import { faCodepen } from "@fortawesome/free-brands-svg-icons/faCodepen"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
	return (
		<div className="bg-black/10 backdrop-blur-lg  max-w-full w-full text-center flex flex-col justify-between gap-y-4 h-full p-4">
			<h1 className="text-2xl w-full">Ahmed Ali Rashed</h1>
			<ul className="flex justify-center gap-x-6 text-2xl w-full">
				<li>
					<a href="#Home" className="max-[638px]:text-xl" aria-label="Home">
						Home
					</a>
				</li>
				<li>
					<a href="#Skills" className="max-[638px]:text-xl" aria-label="Skills">
						Skills
					</a>
				</li>
				<li>
					<a href="#Projects" className="max-[638px]:text-xl" aria-label="Projects">
						Projects
					</a>
				</li>
				<li>
					<a href="#About" className="max-[638px]:text-xl" aria-label="About">
						About
					</a>
				</li>
			</ul>
			<ul className="flex justify-center gap-x-6 text-2xl w-full min-w-fit">
				<li>
					<a target="_blank" href="mailto:ahmedalirashed203@gmail.com" aria-label="mail">
						<FontAwesomeIcon icon={faEnvelope}/>
					</a>
				</li>
				<li>
					<a target="_blank" href="https://www.linkedin.com/in/ahmed-rashed-573940288/" aria-label="linkedin">
					<FontAwesomeIcon icon={faLinkedin}/>
					</a>
				</li>
				<li>
					<a target="_blank" href="https://github.com/legendofnoobs" aria-label="github">
					<FontAwesomeIcon icon={faGithub}/>
					</a>
				</li>
				<li>
					<a target="_blank" href="https://codepen.io/your-work/" aria-label="codepen">
					<FontAwesomeIcon icon={faCodepen}/>
					</a>
				</li>
			</ul>
			<p className="w-full">© 2024 Ahmed Ali Rashed. All rights reserved</p>
		</div>
	)
}

export default Contact