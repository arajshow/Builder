import React from "react";
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
	return (
		<div className="my-[50px] h-auto max-w-maxContentTab lg:max-w-maxContent">
			<Swiper
				slidesPerView={3}
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
