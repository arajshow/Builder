import React from "react";
import pc from "../../assets/pc.png";

const Card = () => {
	return (
		<div className="flex flex-col p-4 gap-2 w-[333px] rounded-lg items-center justify-center bg-white">
			<img
				src={pc}
				alt="pc"
				className="w-[141px] h-[103px] object-contain m-10 items-center justify-self-center"
			/>
			<div className="flex gap-1 text-blue-800 w-full items-start">
				<p className=" bg-gray-200 p-1 text-sm rounded-lg">20% Off</p>
				<p className=" bg-gray-200 p-1 text-sm rounded-lg">Limited time</p>
			</div>
			<p className=" text-gray-700 font-bold items-center">Webbuilder 1</p>
			<p>Computer Modern clasic with wix support</p>
			<div className="flex flex-row gap-2 w-full items-end">
				<p className=" text-gray-700 text-2xl">{"$39.96"}</p>
				<p className=" text-gray-400 items-end">{"$49.96"}</p>
				<p className=" text-pink-300 items-end">{"(20% Off)"}</p>
			</div>
			<div className="  cursor-pointer hover:scale-95 transition-all duration-200 w-full mx-auto flex  justify-center mb-2 bg-blue-600 items-center text-white rounded-lg p-2">
				{" "}
				View Deal
			</div>
		</div>
	);
};

export default Card;
