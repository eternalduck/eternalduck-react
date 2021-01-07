import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from "styled-components"

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
import {sitesList} from '../data/sitesList'
import {darkTheme, lightTheme} from '../../scss/vars-mixins/_index'

import {mixins, media} from '../../scss/vars-mixins/_index'

// import homeLine from '@iconify/icons-clarity/home-line'
// import iconMedal from '@iconify/icons-openmoji/1st-place-medal'

/* <h1 className={css.title}>{title} <InlineIcon icon={homeLine} className="icon"/></h1>
<Icon icon={aboutIcon} className="icon"/> */

const SitesPage = (props) => {
	useEffect(() => {
		// document.body.className = cssS.sitesPage
		// console.info(sitesList)
	})
	console.info(this.props.theme)
	// let currentTheme = darkTheme
	// HI TAIF :)
	let match = useRouteMatch()
	return (
		//
		// <ContentWide bg={(props) => props.theme.bodyClr}>
		// <ThemeProvider theme={currentTheme}>//FAIL
			<ContentWide>
				<Header/>
				{sitesList && sitesList.map(item =>
					<WorkItem key={item.slug}
						item={item}
						match={match.path}
					/>
				)}
			</ContentWide>
		// </ThemeProvider>
	)
}
// style
// const Col = styled.div`
// 	grid-area: ${props => props.area};
// 	background: ${props => props.bg};
// 	height: 50px;
// `

// module.hot.accept()//fail
export default SitesPage
