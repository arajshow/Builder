import React from "react";

const ToolBox = ({ data }) => {
	return (
		<div
			className={`pl-4  cursor-pointer ${
				data == "Tools" ? "pr-12" : "pr-8"
			} py-2 rounded-xl bg-white text-gray-500 hover:bg-richblack-25  transition-all duration-500 `}
		>
			{data}
		</div>
	);
};

export default ToolBox;
