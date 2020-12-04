import React from 'react'
// import ReactDOM from 'react-dom'
import {Switch, Route} from "react-router-dom"

import Header from './components/Header/Header'
import Frontpage from './components/Frontpage/Frontpage'
import Sites from './components/Sites/Sites'
import TestPage from './components/TestPage/TestPage'

import './scss/main.scss'// common styles

export default function Root(props){
	return(
		<>
			<Switch>
				{/* <Route exact path="/" component={Frontpage}/> */}
				<Route exact path="/">
					<Header headerColor="dark"/>
					<Frontpage/>
				</Route>
				<Route path="/sites">
					<Header/>
					<Sites/>
				</Route>
				<Route path="/test">
					<Header/>
					<TestPage/>
				</Route>
			</Switch>
		</>
	)
}
// module.hot.accept()//fail
