import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import {Switch, Route} from "react-router-dom"
import {ThemeProvider, useTheme } from "styled-components"

import {darkTheme, lightTheme} from "./style/vars-mixins/_index"
import GlobalStyle from "./style/GlobalStyle"
import DebugStyle from "./style/utils/DebugStyle"
import "./style/fouc-fix.css"

// import Preloader from "./components/Preloader/Preloader"
import Frontpage from "./components/Frontpage/Frontpage"
import SitesRouting from "./components/Sites/SitesRouting"
import Cv from "./components/Cv/Cv"
import Page404 from "./components/Page404/Page404"
//tmp
import TestPage from "./components/TestPage/TestPage"
import ToggleTheme from "./components/ToggleTheme/ToggleTheme"

//end tmp

// TODO:  check router v6, replace Switch with Routes, Route (path, element) https://blog.logrocket.com/react-router-v6/
export default function Root(props){
	// console.info("root props: ")//debug
	// console.info(props)//debug
	useEffect(() => {
		//add class after loaded for fouc-fix
		window.onload = () => {
			document.body.className = "loaded"
		}
	})
	const [theme, setTheme] = useState(darkTheme)

	const toggleTheme = () => {
		setTheme((theme) => theme.name === "dark" ? lightTheme : darkTheme)
		console.info(`theme toggled to ${theme.name}!`)
	}
	return(
		<>
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<DebugStyle/>
			<ToggleTheme toggleTheme={toggleTheme}
				onClick={console.info(theme.name)}//tmp
			/>
			{/*<Preloader/>*/}
			<Switch>
				{/*<Route exact path="/">*/}
				{/*	<Frontpage/>*/}
				{/*</Route>*/}
				<Route exact path="/" component={Frontpage}/>
				<Route path="/sites" component={SitesRouting}/>
				<Route path="/cv" component={Cv}/>
				<Route path="/test" component={TestPage}/>
				<Route path="*" component={Page404}/>
			</Switch>
		</ThemeProvider>
		</>
	)
}

// module.hot.accept()//fail
