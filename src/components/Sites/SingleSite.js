import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'
import ContentWidth from '../Layout/ContentWidth'
import Header from '../Header/Header'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"


const SingleSite = (props) => {

	useEffect(() => {
		// document.body.className = cssS.singleSite
	})
	let match = useRouteMatch()
	return (
		<ContentWidth>
			<Header/>
			<h4>
				{props.item.title}
			</h4>
			<p>{props.item.descr}</p>
			{/*map these images*/}
			{/*<img src={props.item.images.img} alt=""/>*/}
		</ContentWidth>
	)
}
export default SingleSite
