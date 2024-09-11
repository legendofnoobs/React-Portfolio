const Navbar = () => {
	const anchorStyle = " text-xl text-white hover:bg-cyan-400 hover:text-[rgb(30,41,59)] py-px px-4 rounded-full transition ease";
	return (
		<nav className=" bg-slate-700/30 py-2 px-2 rounded-full fixed border-2 border-cyan-400 mt-2 z-50 backdrop-blur-md">
			<ul className=" flex w-full items-center justify-between gap-x-7 max-[638px]:hidden">
				<li>
					<a className={anchorStyle} href="#Home">Home</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Skills">Skills</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Projects">Projects</a>
				</li>
				<li>
					<a className={anchorStyle} href="#About">About</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Contact">Contact</a>
				</li>
			</ul>
			<ul className=" max-[638px]:flex max-[638px]:w-full max-[638px]:items-center max-[638px]:justify-between max-[638px]:max-w-full max-[638px]:gap-x-4 hidden">
				<li>
					<a className={anchorStyle} href="#Home">
						<i className="fa-solid fa-house"></i>
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Skills">
						<i className="fa-solid fa-bolt"></i>
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Projects">
						<i className="fa-solid fa-diagram-project"></i>
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#About">
						<i className="fa-solid fa-address-card"></i>
					</a>
				</li>
				<li>
					<a className={anchorStyle} href="#Contact">
						<i className="fa-solid fa-phone"></i>
					</a>
				</li>
			</ul>
			
		</nav>
	)
}

export default Navbar