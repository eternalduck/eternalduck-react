import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";//tmp
import {Outlet, Link} from "react-router-dom";
import "./TestPage.module.scss";


const TestPage = (props) => {
	const [info, setInfo] = useState({});
	useEffect(() => {
		function loog(){
			console.info(this);
		}
		loog();
	}, []);


	return(
	<>
		<section className={"content-width"}>

		</section>
	</>
	);
};

export default TestPage;
