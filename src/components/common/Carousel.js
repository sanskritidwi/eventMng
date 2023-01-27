import React, { useEffect, useState } from "react";
import cover from "../../assets/cover.png";

import left from "../../assets/arrow_left.svg";
import right from "../../assets/arrow_right.svg";

// const data = [
//     { imgSrc: cover, customrender: customRender() },
//     { imgSrc: cover, customrender: customRender() },
//     { imgSrc: cover, customrender: customRender() },
//     { imgSrc: cover, customrender: customRender() },
// ];

export const Carousel = ({ data }) => {
	const [currentIndex, setIndex] = useState(0);

	const handleRightClick = () => {
		if (currentIndex <= data.length - 1) {
			if (currentIndex == data.length - 1) setIndex(0);
			else setIndex(currentIndex + 1);
		}
	};

	const handleLeftClick = () => {
		if (currentIndex > 0) setIndex(currentIndex - 1);
		if (currentIndex == 0) setIndex(data.length - 1);
	};

	const renderThumbnails = () => {
		return (
			<div className="thumbnailWrapper">
				{data?.map((item, index) => {
					return (
						<div
							className="thumbnail"
							key={index}
							onClick={() => setIndex(index)}>
							<img src={item} />
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div className="CarouselWrapper">
			{renderThumbnails()}
			<div className="scrollBtn" onClick={handleLeftClick}>
				<img src={left} />
			</div>

			<div className="imgTrain">
				{data?.map((item, index) => {
					return (
						<>
							<div
								className="carouselItem"
								style={{ transform: `translate(-${currentIndex * 100}%)` }}
								key={index}>
								{/* <div className="customRender">{item.customrender}</div> */}

								<img src={item} />
							</div>
						</>
					);
				})}
			</div>
			<div className="scrollBtn" onClick={handleRightClick}>
				<img src={right} />
			</div>
		</div>
	);
};
