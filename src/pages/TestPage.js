import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";//tmp
import {Outlet, Link} from "react-router-dom";
import ContentWidth from "../components/Layout/ContentWidth";
import "./testPage.css";


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
		<ContentWidth>

		</ContentWidth>
	</>
	);
};

export default TestPage;
