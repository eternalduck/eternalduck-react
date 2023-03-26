import React, { useState, useEffect } from "react";
import {
	Route,
	useMatch,
	useParams,
	useNavigate
} from "react-router-dom";
import "./Page404.module.scss";

const Page404 = (props) => {
	const history = useNavigate();
	const goBack = () => history.goBack;

	return(
		<section className={"page404"}>
			<div className={"page404__text"}>
				<h1>not found</h1><br/>
				<p>A fatal exception 0E has occured at 0x000000FF: 42954C6A<br/>the current page will be terminated.</p>
				<p>* Press <span className={"page404__link"} onClick={goBack()}><span>here</span></span> to go to another page.<br/>
				* Press CTRL+ALT+DELETE again to restart your computer.<br/>
				You will lose any unsaved information in all applications.</p>
				<p>Press <span className={"page404__link"} onClick={goBack()}><span>any link</span></span> to continue.</p>
			</div>
		</section>
	);
};

export default Page404;
