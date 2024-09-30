import { motion } from "framer-motion"

import illustration2 from "../assets/illustration2.webp"
import Button from "../components/Button"

const Home = () => {
	return (
		<motion.div className="max-w-6xl py-32 px-5 min-h-full flex max-[638px]:flex-col max-[638px]:py-16 max-[994px]:flex-col max-[994px]:py-14 bg-black/10 rounded-xl backdrop-blur-xl" variants={
			{
				hidden:
					{opacity:0},
				show:{
					opacity:1 ,
					transition:{
						staggerChildren:0.25,
						delay:0.2
						}
					}
		}}
		initial="hidden" animate="show">
			<div className=" w-6/12 p-4 sm:w-full max-[638px]:w-full">
				<h1 className="text-6xl font-bold mb-4 max-[638px]:text-5xl">Ahmed Ali Rashed</h1>
				<h2 className="text-2xl font-bold mb-4">Software Engineering Student</h2>
				<p className="text-xl mb-10 max-[638px]:text-lg">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
				<Button/>
			</div>
			<div className=" w-6/12 p-4 sm:w-full max-[638px]:w-full">
				<img src={illustration2} alt="illustration" className="w-full h-auto"/>
			</div>
		</motion.div>
	)
}

export default Home