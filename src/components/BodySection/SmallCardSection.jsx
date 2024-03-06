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
	const [slidesPerView, setSlidesPerView] = useState(3);
	useEffect(() => {
		// Effect to update `slidesPerView` based on screen size
		const updateSlidesPerViewBasedOnScreen = () => {
			if (window.innerWidth >= 1460) {
				// lg and xl screens
				setSlidesPerView(3);
			} else if (window.innerWidth >= 960) {
				// md screens
				setSlidesPerView(2);
			} else {
				// sm screens
				setSlidesPerView(1);
			}
		};

		// Initial update
		updateSlidesPerViewBasedOnScreen();

		// Update `slidesPerView` when window size changes
		window.addEventListener("resize", updateSlidesPerViewBasedOnScreen);

		// Cleanup
		return () =>
			window.removeEventListener("resize", updateSlidesPerViewBasedOnScreen);
	}, []);

	return (
		<div
			className={`my-[50px] flex h-auto max-w-maxContentTab lg:max-w-maxContent 
			}`}
		>
			<Swiper
				slidesPerView={slidesPerView}
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
