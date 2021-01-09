import React, {useState, useEffect} from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"

// import ContentWidth from "../Layout/ContentWidth"
import SitesPage from "./SitesPage"
import SingleSite from "./SingleSite"
import {sitesList} from '../data/sitesList'

const SitesRouting = (props) => {
	let match = useRouteMatch()
	return (
		// more specific routes MUST come first!!!
		// Topic page has its own <Switch> with more routes that build on the /topics URL path.
		<Switch>
			{sitesList && sitesList.map(item =>
				<Route key={item.slug}
					// path={`${match.path}/:item`}
					   path={`${match.path}/${item.slug}`}
				>
					<SingleSite item={item}/>
				</Route>
			)}
			<Route path={match.path}>
				<SitesPage/>
			</Route>
		</Switch>
	)
}
export default SitesRouting
