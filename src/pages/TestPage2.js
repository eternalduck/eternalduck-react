import React, {useState, useEffect} from "react";
// import ContentWidth from "@components/Layout/ContentWidth"

export const sumUp = (arg1, arg2) => {
	return arg1 + arg2;
};

const TestPage2 = (props) => {
	useEffect(() => {
		console.info("test page 2");
	}, []);//useEffect

	return(
	<>
		{/* <Header/> */}
			<p>{sumUp(2, 3)}</p>
			<p>TEST 22222222222222</p>
	</>
	);
};

export default TestPage2;
