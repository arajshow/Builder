import React from "react";
import { NavbarLinks } from "../../data/navbar-links";

// Icons
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
	return (
		<div
			className={`flex text-white relative h-[72px] items-center justify-center gap-12 border-b-[1px] border-b-slate-700 bg-blackBg transition-all duration-200`}
		>
			<div className="md:w-auto md:mx-0 w-[20%] mx-auto sm:block hidden">
				<form className="relative md:block hidden">
					<input
						type="search"
						placeholder="search"
						className=" bg-white text-slate-300 text-xl rounded-lg p-2 w-[258px]"
					/>
					{/* <IoSearch className="absolute text-slate-400 text-3xl top-[4px] left-[5px]" /> */}
				</form>
				<div className="md:hidden block ml-[10%] items-center text-slate-300 hover:scale-105 transition-all duration-200">
					<IoSearch className=" text-2xl" />
				</div>
			</div>

			{/* Nav links */}
			<nav className="md:w-auto md:mx-0 w-full mx-auto sm:block hidden">
				<ul className="flex md:gap-x-12 gap-[5%] text-slate-200">
					{NavbarLinks.map((item, index) => (
						<li key={index}>
							<p
								className={` cursor-pointer font-inter text-lg hover:scale-105 transition-all duration-200`}
							>
								{item.title}
							</p>
						</li>
					))}
				</ul>
			</nav>

			<div className="sm:hidden flex absolute translate-x-[40vw] text-slate-200 justify-end text-2xl hover:scale-105 hover:cursor-pointer transition-all duration-200">
				<GiHamburgerMenu />
			</div>
		</div>
	);
};

export default Navbar;
