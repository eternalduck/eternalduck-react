import React, {useEffect, useState, createContext, useContext} from "react"
import ReactDOM from "react-dom"
import {Switch, Route} from "react-router-dom"
import {ThemeProvider, useTheme} from "styled-components"

import {dark, light} from "./style/vars-mixins/_index"
import GlobalStyle from "./style/GlobalStyle"
import DebugStyle from "./style/utils/DebugStyle"
import "./style/fouc-fix.css"

import Preloader from "./components/Preloader/Preloader"
import Frontpage from "./components/Frontpage/Frontpage"
import SitesRouting from "./components/Sites/SitesRouting"
import Cv from "./components/Cv/Cv"
import Page404 from "./components/Page404/Page404"
import TestPage from "./components/TestPage/TestPage"//tmp
// import MainThemeProvider from "./components/ToggleTheme/ToggleTheme"
import ThemeContext from "./components/ToggleTheme/ToggleTheme"

// TODO:  check router v6, replace Switch with Routes, Route (path, element) https://blog.logrocket.com/react-router-v6/

// export const ThemeContext = createContext()


export default function Root(props){
	// console.info("root props: ")//debug
	// console.info(props)//debug
	useEffect(() => {
		//add class after loaded for fouc-fix
		window.onload = () => {
			document.body.className = "loaded"
		}
	})
	const theme = useContext(ThemeContext)
	console.info(theme)

	return(
		<ThemeProvider theme={dark}>{/*tmp*/}
			{/*{console.info(useContext(ThemeContext))}*/}
			<GlobalStyle/>
			<DebugStyle/>
			{/*<Preloader/>*/}
			<Switch>
				<Route exact path="/" component={Frontpage}/>
				<Route path="/sites" component={SitesRouting}/>
				<Route path="/cv" component={Cv}/>
				<Route path="/test" component={TestPage}/>
				<Route path="*" component={Page404}/>
			</Switch>
		</ThemeProvider>
	)
}

// module.hot.accept()//fail
