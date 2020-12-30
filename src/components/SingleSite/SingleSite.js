import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"
import LayoutBase from '../Layout/LayoutBase'

// import css from '../../scss/main.scss'
// import cssS from './single-site.scss'


const SingleSite = (props) => {
	useEffect(() => {
		// document.body.className = cssS.singleSite
	})
	return (
		<LayoutBase>
			<h4>
				{props.item.title}
			</h4>
			<p>{props.item.descr}</p>
			{/*map these images*/}
			{/*<img src={props.item.images.img} alt=""/>*/}
		</LayoutBase>
	)
}
export default SingleSite
