/* eslint-disable react/prop-types */

const Card = (props) => {
	return (
		<div className="card w-28 h-28 rounded-xl border-transparent p-2 transition ease">
			<img className="rounded-md w-full h-auto" width="96" height="96" src={props.imgURL} alt="skill" loading="lazy"/>
		</div>
	)
}

export default Card