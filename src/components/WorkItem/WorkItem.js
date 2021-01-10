import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"

// import SingleSite from '../SingleSite/SingleSite'

// import css from '../../scss/--main.scss'
// import cssW from './work-item.scss'

const WorkItem = (props) => {
	let match = useRouteMatch()
	return (
		<>
		<div className="workItem">
			<div className="workItem__inner">
				<Link
					to={`${props.match}/${props.item.slug}`}
					style={{color: "#fff"}}
				>
					<h4>{props.item.title}</h4>
				</Link>

				{/*<Link to={`${props.match}/${props.item.slug}`}*/}
					<img
						src={props.item.thumb}
						alt=""
						style={{width: 150}}
					/>
				{/*</Link>*/}

				{/*<p className="workItem__keywords">*/}
				{/*	{props.item.keywords}*/}
				{/*</p>*/}
			</div>
		</div>
		</>
	)
}
export default WorkItem
