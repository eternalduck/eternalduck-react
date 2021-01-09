import React from "react"
import ReactDOM from "react-dom"
import {ThemeProvider } from "styled-components"
import {Switch, Route} from "react-router-dom"

import Frontpage from "./components/Frontpage/Frontpage"
import SitesRouting from "./components/Sites/SitesRouting"
import Cv from "./components/Cv/Cv"
import Page404 from "./components/Page404/Page404"
//tmp
import TestPage from "./components/TestPage/TestPage"
import {darkTheme, lightTheme} from "./scss/vars-mixins/_index"

//end tmp
// import "./scss/main.scss"// common styles

// TODO:  check router v6, replace Switch with Routes, Route (path, element) https://blog.logrocket.com/react-router-v6/
export default function Root(props){
	const currentTheme = darkTheme
	return(
		// <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
		<ThemeProvider theme={currentTheme}>
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
	)
}

// module.hot.accept()//fail
