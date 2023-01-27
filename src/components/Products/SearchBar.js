import React, { useEffect, useState, useRef } from "react";
import { Navbar } from "../common/navbar/Navbar";
import { CoverTwo } from "../home/CoverTwo";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Filter } from "./Filter";

export const SearchBar = ({ callbackGetData }) => {
	const [query, setQuery] = useState("");
	const [Display, setDisplay] = useState([]);

	const CoverTwoData = {
		title: "Products",
	};

	const filterData = [
		{ id: "1", filterName: "Colour", options: ["Red", "Green", "Blue"] },
		{ id: "2", filterName: "Gender", options: ["Male", "Female", "Unisex"] },
		{
			id: "3",
			filterName: "Price",
			options: ["0-250", "250-450", "450 and above"],
		},
		{ id: "4", filterName: "Type", options: ["Polo", "Basic", "Hoodie"] },
	];

	useEffect(() => {
		setTimeout(() => {
			fetchTableData();
		}, 1000);
	}, [Display]);

	const fetchTableData = () => {
		axios.get("https://dummyjson.com/products").then(function (response) {
			console.log(response.data.products);
			setDisplay(response.data.products);
		});
	};

	const handleQuery = (e) => {
		setQuery(e.target.value);
		console.log(query);
	};

	const renderProduct = () => {
		return (
			<>
				{Display.filter((post) => {
					if (query === "") {
						return post;
					} else if (post.title.toLowerCase().includes(query.toLowerCase())) {
						return post;
					}
				}).map((item) => {
					return (
						<div key={item.id}>
							<ProductCard data={item} />
						</div>
					);
				})}
			</>
		);
	};
	return (
		<div className='ProductsWrapper'>
			<Navbar />
			<CoverTwo data={CoverTwoData} />

			<div className="FilterWrapper">
				Filters
				{filterData.map((item, index) => {
					return (
						<>
						 <Filter data={item}/>
						</>
					);
				})}
			</div>
			<div className="searchResults">
			<input placeholder="search" defaultValue={query} onChange={handleQuery} />
			<div className="productCardsFlex">
			{renderProduct()}
			</div>
	
			</div>
		</div>
	);
};
