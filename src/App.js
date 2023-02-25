import React, {useEffect, useState, createContext, useContext, useLayoutEffect, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled, {ThemeProvider, ThemeContext, useTheme} from "styled-components";

import "@style/fouc-fix.css";
// import "@style/global.scss"
import {dark, light} from "./style/vars-mixins/_index";
import GlobalStyle from "./style/GlobalStyle";
import Preloader from "./components/service/Preloader";
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import TestPage from "./pages/TestPage";
import TestPage2 from "./pages/TestPage2";
import Frontpage from "./pages/Frontpage";
import WorksPage from "./pages/WorksPage";
import CvPage from "./pages/CvPage";
import Page404 from "./components/service/Page404";
import SingleWork from "./components/Work/SingleWork";

// export const ThemeContext = createContext({
// 	isLightTheme: false,
// 	setLightTheme: () => {}
// })

export default function App(props){
	// let {path, url} = useMatch()
	const theme = dark;
	useEffect(() => {
		// Class for fouc-fix.css
		document.body.className = "loaded";
		console.log('Current theme: ', theme.name);
	}, []);

	// Pass header height
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	const [footerHeight, setFooterHeight] = useState(0);
	useLayoutEffect(() => {
		setHeaderHeight(headerRef.current.clientHeight);
		setFooterHeight(footerRef.current.clientHeight);
	}, []);


	const Content = styled.main`
		position: relative;
		/* margin-bottom: -${footerHeight}px; */
		/* margin-top: -${headerHeight}px; */
		/* padding-bottom: ${footerHeight}px; */
		min-height: calc(100vh - ${headerHeight}px)
	`;

//// toggleTheme logic was here

	return(
		<ThemeProvider theme={theme}>
			<BrowserRouter>
			<GlobalStyle/>
			{/* <Preloader/> */}
			<Header ref={headerRef}/>
			<Content>
				<Routes>
					<Route path="/" element={ <Frontpage/> }/>
					<Route path="/sites">
						<Route index element={ <WorksPage/> }/>
						<Route path=":itemSlug" element={ <SingleWork/> }/>
					</Route>
					<Route path="/cv" element={ <CvPage/> }/>
					<Route path="/test" element={ <TestPage/> }/>
					<Route path="/test2" element={ <TestPage2/> }/>
					<Route path="*" element={ <Page404/> }/>
				</Routes>
			</Content>
			<Footer ref={footerRef}/>
			</BrowserRouter>
		</ThemeProvider >
	);
}

