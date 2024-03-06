import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../App.css";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Card from "../common/Card";

const totalCard = [1, 2, 3, 4, 5];

const SmallCardSection = () => {
	const cardview = [3, 2, 1];
	const [id, setId] = useState(0);

	const updateIdBasedOnScreen = () => {
		if (window.innerWidth >= 1024) {
			// lg and xl screens
			setId(0);
		} else if (window.innerWidth >= 768) {
			// md screens
			setId(1);
		} else {
			// sm screens
			setId(2);
		}
	};

	useEffect(() => {
		updateIdBasedOnScreen();
	}, [window.innerWidth]);

	return (
		<div
			className={`my-[50px] flex h-auto max-w-maxContentTab lg:max-w-maxContent `}
		>
			<Swiper
				slidesPerView={cardview[id]}
				spaceBetween={25}
				loop={true}
				freeMode={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Pagination, Autoplay]}
				className="w-full "
			>
				{totalCard.map((item) => {
					return (
						<SwiperSlide key={item}>
							<Card />
						</SwiperSlide>
					);
				})}
				{/* <SwiperSlide>Slide 1</SwiperSlide> */}
			</Swiper>
		</div>
	);
};

export default SmallCardSection;
