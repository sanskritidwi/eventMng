import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Form } from "./components/common/Form";
import { Login } from "./components/common/navbar/Login";
import { Navbar } from "./components/common/navbar/Navbar";
import { Home } from "./components/home/Home";
import { useState } from "react";
import { About } from "./components/About";
import { Employee } from "./components/Employee";
import { SearchBar } from "./components/Products/SearchBar";
import { ProductDetail } from "./components/Products/ProductDetail";
import { Carousel } from "./components/common/Carousel";

function App() {


	
	return (
		<div className="App">
	


			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/about" element={<About />}></Route>
					<Route exact path="/products" element={<SearchBar />}>
					</Route>
					<Route path="/products/:id" element={<ProductDetail />}/> 

				</Routes>
			</Router>
{/* <Carousel/>

      <Employee/> */}

		</div>
	);
}

export default App;
