/* eslint-disable react/prop-types */

const Card = (props) => {
	return (
		<div className="card w-28 h-28 rounded-xl border-transparent hover:bg-white/30 p-2 transition ease">
			<img className="rounded-md" src={props.imgURL} alt={props.name}/>
		</div>
	)
}

export default Card