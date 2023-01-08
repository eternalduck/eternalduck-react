import React, {useEffect, useState, createContext, useContext} from "react"
import {BrowserRouter, Routes, Route, useParams, Outlet} from "react-router-dom"
import styled, {ThemeProvider, ThemeContext, useTheme} from "styled-components"

import {dark, light} from "@style/vars-mixins/_index"
// import GlobalStyle from "@style/GlobalStyle"
// import DebugStyle from "@style/utils/DebugStyle"
import "@style/fouc-fix.css"
import "@style/global.scss"

import Preloader from "@components/service/Preloader"
// import Header from "@components/header-footer/Header"
import RootPage from "@pages/RootPage"
import TestPage from "@pages/TestPage"
import TestPage2 from "@pages/TestPage2"
import Frontpage from "@pages/Frontpage"
import WorksPage from "@pages/WorksPage"
import CvPage from "@pages/CvPage"
import Page404 from "@pages/Page404"
import SingleWork from "@components/Work/SingleWork"

import {sitesList} from "@data/sitesList"
import {uxList} from "@data/uxList"

// export const ThemeContext = createContext({
// 	isLightTheme: false,
// 	setLightTheme: () => {}
// })

export default function App(props){
	// let {path, url} = useMatch()
	const theme = dark;
	useEffect(() => {
		//class for fouc-fix.css
		document.body.className = "loaded"
		console.log('Current theme: ', theme.name)
	}, [])

//// toggleTheme logic was here

	return(
		<ThemeProvider theme={theme}>
			{/* <GlobalStyle/> */}
			{/* <DebugStyle/> */}
			{/*<Preloader/>*/}
			<BrowserRouter>
				{/* <Header/>
				<Outlet/> */}

				<Routes>
					<Route path="/" element={ <RootPage/> }>
						<Route path="/" element={ <Frontpage/> }/>
						<Route path="sites" element={ <WorksPage data={sitesList}/> }/>
						<Route path={"sites/:itemSlug"} element={ <SingleWork data={sitesList}/> }/>
						<Route path="cv" element={ <CvPage/> }/>
						<Route path="test" element={ <TestPage/> }/>
						<Route path="test2" element={ <TestPage2/> }/>
						<Route path="*" element={ <Page404/> }/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider >
	)
}

// <Route path="/ux">
// 	<Route path="/ux" element={<WorksPage data={uxList}/>} />
// 	<Route path={`/ux/:itemSlug`} element={<SingleWork data={uxList}/>} />
// </Route>
