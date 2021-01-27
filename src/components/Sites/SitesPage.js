import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import {
	Route,
	Switch,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"
import styled, {css, createGlobalStyle } from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import Header from "../Header/Header"
import ContentWide from "../Layout/ContentWide"
import SiteItem from "./SiteItem"
import {sitesList} from "../data/sitesList"
import {generateRandomBg} from "../helpers/generateRandomBg"
import SingleSite from "./SingleSite"
import Page404 from "../Page404/Page404"


const SitesPage = (props) => {
	const [bg, setBg] = useState("#eeefee")
	let {path, url} = useRouteMatch()

	// const theme = useState()

	useEffect(() => {
		console.info(`SitesPage: current path: ${path}`)
		setBg(prev => generateRandomBg(sitesList.length))
	}, [])
	return (
		<>
		<ContentWide bg={props => props.theme.sitesPageBg}>
			<Header className={"header_test"}/>


					<SitesWrap>

					{sitesList && sitesList.map((item, i) =>
						<SiteItem key={item.slug}
							item={item}
							bg={bg[i]}
						/>
					)}
					</SitesWrap>

			<GlobalStyle/>
		</ContentWide>
		</>
	)
}//SitesPage

const GlobalStyle = createGlobalStyle`
	.header_test {
		//background: red;
		padding: 30px;
	}
`
const SitesWrap = styled.div`
	margin: 50px 0;
	padding-bottom: 100px;
`

export default SitesPage
