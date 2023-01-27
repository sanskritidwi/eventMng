import React, { useState } from "react";
import { Login } from "./Login";
import logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [loginModal, setLoginModal] = useState(false);

	const navLinks = [
		{ link: "About", path: "/about" },
		{ link: "Products", path: "/products" },
		{ link: "Pricing", path: "/pricing" },
		{ link: " Solution", path: "/solution" },
		{ link: "Features", path: "/featiures" },
	];

	const renderLogo = () => {
		return (
			<Link to="/">
				{" "}
				<div className="logo">
					<img src={logo} />
				</div>
			</Link>
		);
	};

	// const renderLoginModal=()=>{
	//     if(!loginModal) return null;
	//     return(
	//        <></>
	//     )
	// }

	const renderLinks = () => {
		return (
			<div className="navLinks">
				{navLinks.map((item, index) => {
					return (
                        <Link to={item.path} key={index}>
						<div className="links">
							{item.link}
						</div>
                        </Link>
					);
				})}
			</div>
		);
	};
	const renderButtons = () => {
		return (
			<>
				{" "}
				<div
					onClick={() => {
						setLoginModal(true);
					}}>
					Log In
				</div>
			</>
		);
	};

	return (
		<div className="NavbarWrapper">
			<div className="nav">
				{renderLogo()}
				{renderLinks()}
				{renderButtons()}
			</div>

			{/* {
            renderLoginModal()
        } */}
		</div>
	);
};
