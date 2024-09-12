/* eslint-disable react/prop-types */

const Card = (props) => {
	return (
		<div className="card w-28 h-28 rounded-xl border-transparent hover:bg-white/10 p-2 transition ease">
			<img className="rounded-md" src={props.imgURL} alt="skill"/>
		</div>
	)
}

export default Card