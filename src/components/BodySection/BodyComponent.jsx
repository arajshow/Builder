import React from "react";

// icons
import { GoInfo } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

// data
import { ToolLists } from "../../data/Tool-lists";
import { DirectoryList } from "../../data/diractory-list";

// components
import ToolBox from "../common/ToolBox";

import BigCardSection from "./BigCardSection";
import SmallCardSection from "./SmallCardSection";

const BodyComponent = () => {
	return (
		<div className="w-8/12 mt-[32px] mx-auto flex flex-col bg-whiteBg gap-4 text-black">
			{/* heading */}
			<p className="text-[48px] font-inter w-full">
				Best Website builders in the US
			</p>

			{/* time-zone */}
			<div className="flex flex-row w-full justify-between py-3 border-t border-b border-gray-400 text-gray-500">
				<div className="flex flex-row items-start gap-4  text-md ">
					<div className="flex flex-row items-center gap-2">
						<IoCheckmarkCircleOutline />
						<p className="">Last Updated - February 22, 2020</p>
					</div>
					<div className="flex flex-row items-center gap-2">
						<GoInfo />
						<p className="">Advertising Disclosure</p>
					</div>
				</div>

				<div className="flex flex-row items-center gap-2 cursor-pointer  hover:scale-105 transition-all duration-200 ">
					<p className="text-gray-400">Top Relevant</p>
					<IoChevronDownOutline />
				</div>
			</div>

			{/* list-section */}
			<div className="md:flex md:flex-row hidden gap-3">
				{ToolLists.map((item, index) => (
					<ToolBox data={item.title} />
				))}
			</div>

			{/* directory */}
			<div className="flex flex-row gap-2 text-gray-500 mb-4">
				{DirectoryList.map((item, index) => (
					<div className="flex flex-row gap-2 items-center">
						<p>{item.title}</p>
						<IoIosArrowForward className="text-gray-600 font-bold" />
					</div>
				))}
			</div>

			{/* Major Card */}
			<BigCardSection />

			<p className="text-[32px] font-inter w-full mt-10">
				Related deals you might like for
			</p>

			{/* Minor Card */}
			<SmallCardSection />

			{/* ending */}
			<div className="flex flex-row justify-between items-center my-12">
				<p className="text-[32px] md:w-[40%] w-full text-slate-600 font-normal">
					Sign up and get exclusive special deals
				</p>
				<div className="md:flex md:flex-row hidden gap-0 w-[45%]">
					<form>
						<input
							type="search"
							className=" bg-white w-full text-black text-lg rounded-l-lg p-2"
						/>
					</form>
					<button
						type="submit"
						className=" bg-blue-600 text-md h-[44px] w-[35%] text-white rounded-r-lg"
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default BodyComponent;
