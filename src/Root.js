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

export default function Root(props){
	return(
		<>
			<Switch>
				{/* <Route exact path="/" component={Frontpage}/> */}
				<Route exact path="/">
					<Header/>
					<Frontpage/>
				</Route>
				<Route path="/sites">
					<Header/>
					<SitesRouting/>
				</Route>
				<Route path="/cv">
					<Header headerColor="dark"/>
					<Cv/>
				</Route>
				<Route path="/test">
					<Header/>
					<TestPage/>
				</Route>
				<Route path="*">
					<Header/>
					<Page404/>
				</Route>
			</Switch>
		</>
	)
}
// module.hot.accept()//fail
