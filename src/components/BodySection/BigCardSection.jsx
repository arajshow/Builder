import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { CardList } from "../../data/card-list";
import { LuTrophy } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import pc from "../../assets/pc.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const BigCardSection = () => {
	const [fullStars, setFullStars] = useState(4);
	const [hasHalfStar, setHasHalfStar] = useState(4);

	return (
		<div className="flex flex-col gap-10 w-full mx-auto">
			{CardList.map((item) => (
				<div
					key={item.id}
					className="relative flex flex-row gap-4 bg-white rounded-lg"
				>
					{/* orange tag */}
					{(item.id == "1" || item.id == "2") && (
						<div className="absolute -top-[1.2em] -left-[0.3em] flex gap-2 justify-center items-center bg-orange-500 p-2 text-white rounded-r-lg">
							{item.id == "1" && <LuTrophy className="text-xl" />}
							{item.id == "2" && <IoDiamondOutline className="text-xl" />}

							<p>Best Choice</p>
						</div>
					)}

					{/* rank */}
					<div className="absolute top-[10%] -left-[1.5em] w-12 h-12 bg-gray-25 border flex justify-center items-center border-gray-300 text-black rounded-full">
						{item.id}
					</div>

					{/* image */}
					<div className="flex flex-col justify-center gap-2 items-center w-[25%]">
						<img
							src={pc}
							alt="pc"
							className="w-[141px] h-[103px] object-contain"
						/>
						<p>{item.title}</p>
					</div>

					{/* main body section */}
					<div className="lg:w-[50%] w-[75%] mt-5 flex flex-col gap-2">
						<p>
							<span className="font-semibold">{item.heading}</span>
							{item.id === "4" ? (
								<span className="font-semibold">{":"}</span>
							) : (
								<span className="font-semibold">{"-"}</span>
							)}
							{item.description}
						</p>
						<p className="text-lg font-bold">Main highlights</p>
						{item.id === "4" ? (
							<div className="flex flex-col">
								<div className="flex flex-col bg-orange-100 rounded-lg justify-start ml-3 pl-2">
									{item.heighlights[0].map((data, id) => (
										<div
											key={id}
											className="flex flex-row gap-1 p-2 items-center"
										>
											<div className="p-1 rounded-lg bg-white text-blue-500">
												{data.point}
											</div>
											<p className=" text-gray-500 text-[15px]">{data.title}</p>
										</div>
									))}
								</div>
								<p className="text-lg my-2">Why we love it</p>
								<div>
									{item.heighlights[1].map((data, id) => (
										<div
											key={id}
											className="flex flex-row gap-1 p-1 items-center"
										>
											<div className=" text-blue-500">
												<IoCheckmarkCircleOutline />
											</div>
											<p className=" text-gray-500 text-[15px]">{data.title}</p>
										</div>
									))}
								</div>
							</div>
						) : (
							<p className="ml-4">{item.heighlights}</p>
						)}

						<div className=" cursor-pointer  flex flex-row text-blue-500 gap-2 items-center my-2">
							<p>Show more</p>
							<FaAngleDown />
						</div>
					</div>

					{/* side section */}
					<div className="w-[18%] lg:flex lg:flex-col hidden items-center justify-between">
						<div className=" bg-blue-300 flex flex-col justify-center text-blue-900 rounded-b-lg w-[148px] p-3 items-center">
							<p className="text-3xl mb-3">{item.points}</p>
							<p>{item.pointsTitle}</p>
							<ReactStars
								count={5}
								value={item.id === "1" || item.id === "2" ? 5 : 4}
								size={20}
								edit={false}
								activeColor="#ffd700"
								color="#ffffff"
								emptyIcon={<FaRegStar />}
								fullIcon={<FaStar />}
							/>
						</div>
						<div className="w-full  hover:scale-95 transition-all duration-200  cursor-pointer mx-auto flex  justify-center mb-2 bg-blue-600 items-center text-white rounded-lg p-2">
							{" "}
							View
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BigCardSection;
