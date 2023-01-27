import React from "react";
import tick from "../../../assets/Frame 29.svg";

export const DealCard = ({ data }) => {
	const { title, subTitle, cost, features } = data;
	return (
		<div className="DealCardWrapper">
			<div className="title">{title}</div>
			<div className="subTitle">{subTitle}</div>
			<hr />
			<div className="price">
				<div className="number">${cost}</div> /month
			</div>
			{features.map((item, index) => {
				return (
					<div className="tick" key={index}>
						<img src={tick} />
						{item}
					</div>
				);
			})}
			<div className="primaryBtn">Start Free Trial</div>
		</div>
	);
};
