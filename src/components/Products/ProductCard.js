import React, { useState } from "react";
import { Link } from "react-router-dom";

import left from "../../assets/arrow_left.svg";
import right from "../../assets/arrow_right.svg";
import { Carousel } from "../common/Carousel";
import { AddToCart } from "./AddToCart";

const ProductCard = ({ data }) => {


	const { title, images, price , stock} = data;

	

	return (
		<div className="ProductCardWrapper">
			<Link to={"/products/"+data.id}>

			<div className="title">{title}</div>
			<div className="photos">
		


	{/* <Carousel data={data.images}/> */}
<img src = {data.images[0]} className="photos"/>
			</div></Link>
			<div className="row">
				<div className="price">{price}</div>
				<AddToCart limit={stock}/>
			</div>

		</div>
	);
};

export default ProductCard;
