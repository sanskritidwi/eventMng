import React from "react";
import { Navbar } from "../common/navbar/Navbar";
import { Footer } from "../common/Footer";
import { Comapnies } from "./comapanies/Comapnies";
import { Cover } from "./Cover";
import { CoverFour } from "./CoverFour";
import { CoverThree } from "./CoverThree";
import { CoverTwo } from "./CoverTwo";
import { DealCard } from "./deals/DealCard";
import { DealCover } from "./deals/DealCover";

const CoverTwoData = {
	title: "Open New Tabs is Sh*t ",
	subTitle:
		"Don’t let your computer memories consumes all of those browser tab. Findtrend let you gathers all of your favorite website into one place.",
};

export const Home = () => {
	return (
		<div>
			<Navbar/>
			<Cover />
			<CoverTwo data={CoverTwoData}/>
			<CoverThree />
			<Comapnies />
			<DealCover />
			<CoverFour />
			<Footer />
		</div>
	);
};
