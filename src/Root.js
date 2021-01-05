import React from 'react'
// import ReactDOM from 'react-dom'
import {Switch, Route} from "react-router-dom"

import Header from './components/Header/Header'
import Frontpage from './components/Frontpage/Frontpage'
import SitesRouting from './components/Sites/Sites'
import Cv from './components/Cv/Cv'
import Page404 from './components/Page404/Page404'
//tmp
import TestPage from './components/TestPage/TestPage'
//end tmp
// import './scss/main.scss'// common styles

// TODO:  check router v6, replace Switch with Routes, Route (path, element) https://blog.logrocket.com/react-router-v6/
export default function Root(props){
	return(
		<>
			<Switch>
				{/* <Route exact path="/" component={Frontpage}/> */}
				<Route exact path="/">
					<Frontpage/>
				</Route>
				<Route path="/sites">
					<SitesRouting/>
				</Route>
				<Route path="/cv">
					<Cv/>
				</Route>
				<Route path="/test">
					<TestPage/>
				</Route>
				<Route path="*">
					<Page404/>
				</Route>
			</Switch>
		</>
	)
}
// module.hot.accept()//fail
