import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
	const anchorStyle = " text-xl text-white hover:bg-cyan-400 hover:text-[rgb(30,41,59)] py-px px-4 rounded-full transition ease";
	return (
		<nav className=" bg-black/10 py-2 px-2 rounded-full fixed border-2 border-cyan-400 mt-2 z-50 backdrop-blur-md">
			<ul className=" flex w-full items-center justify-between gap-x-7 max-[638px]:hidden">
				<li>
					<a className={anchorStyle} href="#Home" aria-label="Home">Home</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Skills" aria-label="Skills">Skills</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Projects" aria-label="Projects">Projects</a>
				</li>
				<li>
					<a className={anchorStyle} href="#About" aria-label="About">About</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Contact" aria-label="Contact">Contact</a>
				</li>
			</ul>
			<ul className=" max-[638px]:flex max-[638px]:w-full max-[638px]:items-center max-[638px]:justify-between max-[638px]:max-w-full max-[638px]:gap-x-4 hidden">
				<li>
					<a className={anchorStyle} href="#Home" aria-label="Home">
						<FontAwesomeIcon icon={faHouse} />
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Skills" aria-label="Skills">
					<FontAwesomeIcon icon={faBolt} />
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Projects" aria-label="Projects">
						<FontAwesomeIcon icon={faDiagramProject} />
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#About" aria-label="About">
						<FontAwesomeIcon icon={faAddressCard} />
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Contact" aria-label="Contact">
					<FontAwesomeIcon icon={faPhone} />
					</a>
				</li>
			</ul>
			
		</nav>
	)
}

export default Navbar