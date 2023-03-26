import React, {useEffect, useState, createContext, useContext, useLayoutEffect, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./style/fouc-fix.css";
import "./style/vars-mixins/_vars-index.scss"
import "./style/global.scss";
import {darkTheme, lightTheme} from "./style/vars-mixins/theme";// TODO del
import Preloader from "./components/service/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Frontpage from "./pages/Frontpage";
import WorksPage from "./pages/WorksPage";
import CvPage from "./pages/CvPage";
import Page404 from "./pages/Page404";
import WorkSingle from "./pages/WorkSingle";
import TestPage from "./pages/TestPage/TestPage";

// export const ThemeContext = createContext({
// 	isLightTheme: false,
// 	setLightTheme: () => {}
// })

export default function App(props){
	// let {path, url} = useMatch()
	const theme = darkTheme;
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

//// toggleTheme logic was here

	return(
		<BrowserRouter>
			{/* <Preloader/> */}
			<Header ref={headerRef}/>
			<main>
				<Routes>
					<Route path="/" element={ <Frontpage/> }/>
					<Route path="/sites">
						<Route index element={ <WorksPage/> }/>
						<Route path=":itemSlug" element={ <WorkSingle/> }/>
					</Route>
					<Route path="/cv" element={ <CvPage/> }/>
					<Route path="/test" element={ <TestPage/> }/>
					<Route path="*" element={ <Page404/> }/>
				</Routes>
			</main>
			<Footer ref={footerRef}/>
		</BrowserRouter>
	);
}

