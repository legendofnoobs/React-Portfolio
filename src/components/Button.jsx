import { cvLink } from "../data/index.js"

const Button = () => {
	return (
		<a rel="noopener noreferrer" target="_blank" href={cvLink} className="bg-black/10 text-2xl px-5 py-2 border-2 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition ease">
			My Resume
		</a>
	)
}

export default Button