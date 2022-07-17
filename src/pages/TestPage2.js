import React, {useState, useEffect} from "react"
import ContentWidth from "@components/Layout/ContentWidth"


const TestPage2 = (props) => {
	useEffect(() => {
		console.info("test page 2")
	}, [])//useEffect


	return(
	<>
		{/* <Header/> */}
		<ContentWidth>
			TEST 22222222222222
		</ContentWidth>
	</>
	)
}

export default TestPage2
