// TODO:  check router v6, replace Switch with Routes, Route (path, element) https://blog.logrocket.com/react-router-v6/
import React, {useEffect, useState, createContext, useContext} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Switch, Route, useRouteMatch, useParams} from "react-router-dom"
import {ThemeProvider, useTheme} from "styled-components"

import {dark, light} from "./style/vars-mixins/_index"
import GlobalStyle from "./style/GlobalStyle"
import DebugStyle from "./style/utils/DebugStyle"
import "./style/fouc-fix.css"

import Preloader from "./components/service/Preloader"
import Frontpage from "./components/Frontpage/Frontpage"
import WorksPage from "./components/Work/WorksPage"
import SingleWork from "./components/Work/SingleWork"
import CvPage from "./components/Cv/CvPage"
import Page404 from "./components/service/Page404"
import TestPage from "./components/service/TestPage"
import {sitesList} from "./components/data/sitesList"
import {uxList} from "./components/data/uxList"

export const ThemeContext = createContext({
	isLightTheme: false,
	setLightTheme: () => {}
})

export default function Root(props){
	let {path, url} = useRouteMatch()

	useEffect(() => {
		//add class after loaded for fouc-fix
		window.onload = () => {
			document.body.className = "loaded"
		}
	})

//////////////////////////////
// 	const [isLightTheme, setLightTheme] = useState(checkUserTheme())
// 	useEffect(() => {
// 		localStorage.setItem("isLight", isLightTheme)
// 		// localStorage.setItem("isLight", JSON.stringify(isLightTheme))
// 	}, [isLightTheme])
//
// 	function checkUserTheme() {
// 		const isReturningUser = "isLight" in localStorage
// 		const userPrefersDark = () => {
// 			if(!window.matchMedia) return
// 			return window.matchMedia("(prefers-color-scheme: dark)").matches
// 		}
// 		if (isReturningUser) {
// 			localStorage.getItem("isLight")// TODO: some fail with undefined at start
// 			// JSON.parse(localStorage.getItem("isLight"))
// 		} else if (userPrefersDark) {
// 			return false
// 		} else {
// 			return false//default dark at first visit
// 		}
// 	}//checkUserTheme
//
// 	const toggleTheme = () => {
// 		setLightTheme(prev => !prev)
// 		console.info(`isLight is ${isLightTheme}!`)
// 	}
//////////////////////////////
	return(
	// <ThemeContext.Provider value={{
	// 	isLightTheme: isLightTheme,
	// 	setLightTheme: toggleTheme
	// }}>
	// 	<ThemeProvider theme={isLightTheme ? light : dark}>
		<ThemeProvider theme={dark}>{/*tmp hardcoded*/}
			<GlobalStyle/>
			<DebugStyle/>
			{/*<Preloader/>*/}
			{/* TODO wait for router v6 https://blog.logrocket.com/react-router-v6*/}
			<Switch>
				<Route exact path="/" component={Frontpage}/>
				<Route path="/sites">
					<Switch>
						<Route exact path="/sites">
							<WorksPage data={sitesList}
								bg={props => props.theme.sitesPageBg}/>
						</Route>
						<Route path={`/sites/:itemSlug`}>
							<SingleWork data={sitesList}
								bg={props => props.theme.singleSiteBg}/>
						</Route>
					</Switch>
				</Route>
				<Route path="/ux">
					<Switch>
						<Route exact path="/ux">
							<WorksPage data={uxList}
								bg={props => props.theme.uxPageBg}/>
						</Route>
						<Route path={`/ux/:itemSlug`}>
							<SingleWork data={uxList}
								bg={props => props.theme.singleUxBg}/>
						</Route>
					</Switch>
				</Route>
				<Route path="/cv" component={CvPage}/>
				<Route path="/test" component={TestPage}/>
				<Route component={Page404}/>
			</Switch>
		</ThemeProvider>
	// </ThemeContext.Provider>
	)
}
