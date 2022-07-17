import React, {useEffect, useState, createContext, useContext} from "react"
import {BrowserRouter, Routes, Route, useParams, Outlet} from "react-router-dom"
import styled, {ThemeProvider, useTheme} from "styled-components"

import {dark, light} from "@style/vars-mixins/_index"
import GlobalStyle from "@style/GlobalStyle"
import DebugStyle from "@style/utils/DebugStyle"
import "@style/fouc-fix.css"

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

export const ThemeContext = createContext({
	isLightTheme: false,
	setLightTheme: () => {}
})

export default function App(props){
	// let {path, url} = useMatch()

	useEffect(() => {
		//class for fouc-fix.css
		document.body.className = "loaded"
	}, [])

//// toggleTheme logic was here

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
			{/* <Header isFront={true}/> */}
			<BrowserRouter>
				{/* <Header/>
				<Outlet/> */}

				<Routes>
					<Route path="/" element={<RootPage/>}>
						<Route path="/" element={<Frontpage/>}/>
						<Route path="/sites" element={<WorksPage data={sitesList}/>}/>
								{/* <WorksPage data={sitesList}
									bg={props => props.theme.sitesPageBg}
								/> */}
							<Route path={`/sites/:itemSlug`} element={<SingleWork data={sitesList}/>}/>
								{/* <SingleWork data={sitesList}
									bg={props => props.theme.singleSiteBg}
								/> */}
						<Route path="/cv" element={<CvPage/>}/>
						<Route path="/test" element={<TestPage/>}>
							<Route path="test2" element={<TestPage2/>}/>
						</Route>
						<Route path="*" element={<Page404/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	// </ThemeContext.Provider>
	)
}
const Anchor = styled.a.attrs(
	props => ({className: "primary"})
)`
	color: red;
`

// <Route path="/ux">
// 	<Route path="/ux" element={<WorksPage data={uxList}/>} />
// 	<Route path={`/ux/:itemSlug`} element={<SingleWork data={uxList}/>} />
// </Route>
