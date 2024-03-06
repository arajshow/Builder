import React from "react";
import { ContactList, CategoriesList } from "../../data/footer-links";

// Icons
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
	console.log("footer", ContactList, CategoriesList);
	return (
		<div className=" bg-blackBg h-[452px]">
			<div className="flex lg:flex-row gap-8 h-full items-start justify-between w-8/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-12 ">
				{/* categories */}
				<div className="flex flex-col gap-3">
					<h1 className=" text-slate-300 font-semibold text-[16px]">
						Categories
					</h1>
					<div className="flex flex-col gap-3 text-slate-300">
						{CategoriesList.map((ele, index) => {
							return (
								<p
									key={index}
									className="text-[14px] cursor-pointer hover:scale-95 transition-all duration-200"
								>
									{ele.title}
								</p>
							);
						})}
					</div>
				</div>

				{/* contactList */}
				<div className="flex flex-col gap-3">
					<h1 className=" text-slate-300 font-semibold text-[16px]">Contact</h1>
					<div className="flex flex-col gap-3 text-slate-300">
						{ContactList.map((ele, index) => {
							return (
								<p
									key={index}
									className="text-[14px]  cursor-pointer hover:scale-95 transition-all duration-200"
								>
									{ele.title}
								</p>
							);
						})}
					</div>
				</div>

				{/* united States */}
				<div className="lg:block hidden h-[60%] text-slate-300 pr-[8%]">
					<div className="flex items-center h-full gap-2">
						<p>United States</p>
						<FaAngleDown />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
