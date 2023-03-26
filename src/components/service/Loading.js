import React from "react";
import "./Loading.module.scss";

// add watched data to watchLoaded var in a component and pass it as "loaded" props
// <Loading loaded={watchLoaded}/>

const Loading = (props) => {
	return (
		!props.loaded ?
			`<div className={"loading"}>
				<div className={"loading__ball"}><div/>
			</div>`
		: null
	);
};


export default Loading;
