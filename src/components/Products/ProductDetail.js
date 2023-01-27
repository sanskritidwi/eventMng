import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/navbar/Navbar";
import axios from "axios";
import { Carousel } from "../common/Carousel";
import { AddToCart } from "./AddToCart";

export const ProductDetail = () => {
	const [data, setData] = useState([]);
	const [detail, setDetail] = useState();
    const [productCount, setProductCount] = useState(0);
	const [press, setPress] = useState(false);

	const params = useParams();
	const { id } = params;

	useEffect(() => {
		setTimeout(() => {
			fetchTableData();
			handleResponse();
		}, 1000);
	}, [data]);

	const fetchTableData = () => {
		axios.get("https://dummyjson.com/products").then(function (response) {
			setData(response.data.products);
		});
	};

	const handleResponse = () => {
		if (data.length > 0) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == { id }.id) {
					setDetail(data[i]);
					break;
				}
			}
		}
	};

	const renderImage = () => {
		return (
			<>
				<div className="imgWrapper">
					<div className="imgCol">
					
		
					</div>
					<div className="img">
					<Carousel data={detail?.images} />
					</div>
				</div>
			</>
		);
	};

	const renderDetailSec = () => {
		return (
			<div className="detailSec">
				<div className="title">{detail?.title}</div>
                <div className="description">{detail?.description}</div>
                <div className="price">&#8377;{detail?.price}</div>
                <div className="row"> <AddToCart limit={detail?.stock}/></div>
               
			</div>
		);
	};

    const renderCategory = () => {
        let category = detail?.category.toUpperCase();

		return (
			
				<div className="category">{category}</div>
			
		);
	};


    const renderAddToCartButton = (limit) => {
		const handleIncrement = () => {
			setProductCount((p) => p + 1);
		};
		const handleDecrement = () => {
			setProductCount((p) => p - 1);
		};
		const handleAddClick = () => {
			setPress(true);
			setProductCount(1);
		};

		if (productCount === 0) {
			return (
				<>
					<div
						className="cartBtn"
						onClick={() => {
							handleAddClick();
						}}>
						Add To Cart
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className="productCounter">
						<div
							className="cartBtn"
							onClick={() => {
								handleDecrement();
							}}>
							-
						</div>

						<div className="productCount">{productCount}</div>
						<div
							className="cartBtn"
							onClick={() => {
								handleIncrement(limit);
							}}>
							+
						</div>
					</div>
				</>
			);
		}
	};
	return (
		<div>
			<Navbar />
			<div className="ProductDetailWrapper">
                {renderCategory()}
                <div className="flex">
                {renderImage()}
				{renderDetailSec()}
                </div>
				
				<div className="title"></div>
			</div>
			<Footer />
		</div>
	);
};
