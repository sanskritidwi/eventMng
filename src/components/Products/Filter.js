import { React, useState } from "react";
import caret from "../../assets/arrow_right.svg";

export const Filter = ({ data }) => {
	const [show, setShow] = useState(true);

	const renderOptions = (options) => {
		if (!show) return null;
		return (
			<div className="options">
				{options.map((option, ind) => {
					return (
						<div key={ind} className="filterName">
							<input type="checkbox" />
							{option}
						</div>
					);
				})}
			</div>
		);
	};
	return (
		<>
			<div className="titleRow">
				{data.filterName}
				<div
					onClick={() => {
						setShow(!show);
						console.log(show);
					}}>
					<img src={caret} />
				</div>
			</div>

			{renderOptions(data.options)}
		</>
	);
};
