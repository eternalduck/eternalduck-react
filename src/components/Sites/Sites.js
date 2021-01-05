import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"
// import cx from 'classnames'

import Header from '../Header/Header'
import ContentWide from '../Layout/ContentWide'
import WorkItem from '../WorkItem/WorkItem'
import SingleSite from '../SingleSite/SingleSite'
import {sitesList} from '../data/sitesList'

import styled from 'styled-components'
import {colors, mixins, media} from '../../scss/vars-mixins/_index'

// import css from '../../scss/main.scss'
// import cssS from './sites.scss'

// import homeLine from '@iconify/icons-clarity/home-line'
// import iconMedal from '@iconify/icons-openmoji/1st-place-medal'

/* <h1 className={css.title}>{title} <InlineIcon icon={homeLine} className="icon"/></h1>
<Icon icon={aboutIcon} className="icon"/> */

const SitesRouting = (props) => {
	let match = useRouteMatch()

	// let { item } = useParams();
	return (
		// more specific routes MUST come first!!!
		//Topic page has its own <Switch> with more routes that build on the /topics URL path.
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
				{/* You can think of the 2nd <Route> here as an "index" page for all topics, or the page that is shown when no topic is selected */}
				<SitesPage/>
			</Route>
		</Switch>
	)
}
export default SitesRouting

const SitesPage = (props) => {
	useEffect(() => {
		// document.body.className = cssS.sitesPage
		// console.info(sitesList)
	})
	let match = useRouteMatch()
	return (
		//
		<ContentWide bg={colors.blueVioDarkest}>
			<Header/>
			{sitesList && sitesList.map(item =>
				<WorkItem key={item.slug}
					item={item}
					match={match.path}
				/>
			)}
		</ContentWide>
	)
}
// style
// const Test = styled.div`
// 	${mixins.testBg}
// `

// module.hot.accept()//fail
