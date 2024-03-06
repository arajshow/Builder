import React from "react";

const ToolBox = ({ data }) => {
	return (
		<div
			className={`pl-4 ${
				data == "Tools" ? "pr-12" : "pr-8"
			} py-2 rounded-xl bg-white text-gray-500`}
		>
			{data}
		</div>
	);
};

export default ToolBox;
