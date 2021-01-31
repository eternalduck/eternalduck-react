import React, {useState, useEffect, useCallback} from "react"
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
import Header from "../header-footer/Header"
import ContentWide from "../Layout/ContentWide"
import SiteItem from "./SiteItem"
import {sitesList} from "../data/sitesList"
import {generateRandomBg} from "../helpers/generateRandomBg"
import Page404 from "../service/Page404"
import Loading from "../service/Loading"


const SitesPage = (props) => {
	const [bg, setBg] = useState("#eeefee")
	let {path, url} = useRouteMatch()
	let watchLoaded = sitesList[0].slug
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
					{!watchLoaded ?
						<Loading loaded={watchLoaded}/>
						:
						sitesList && sitesList.map((item, i) =>
							<SiteItem key={item.slug}
								item={item}
								bg={bg[i]}
							/>
						)
					}{/*if data ready*/}
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
