import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import {
	useRouteMatch,
	useParams
} from "react-router-dom"
import styled, {css, createGlobalStyle } from "styled-components"
import {mixins} from "../../style/vars-mixins/_index"
import Header from "../Header/Header"
import ContentWide from "../Layout/ContentWide"
import WorkItem from "../WorkItem/WorkItem"
import {sitesList} from "../data/sitesList"

const SitesPage = (props) => {
	// console.info("SitesPage props: ")//debug
	// console.info(props)//debug
	const theme = useState()
	// console.info(`sitesPage theme: ${theme}`)//debug
	let match = useRouteMatch()

	return (
		<ContentWide bg={theme.bodyBg}>
			<Header className={"header_test"}/>
				<SitesWrap>
				{sitesList && sitesList.map(item =>
					<WorkItem key={item.slug}
						item={item}
						match={match.path}
					/>
				)}
				</SitesWrap>
			<GlobalStyle/>
		</ContentWide>
	)
}//SitesPage

const GlobalStyle = createGlobalStyle`
	.header_test {
		//background: red;
		padding: 30px;
	}
`
const SitesWrap = styled.div`
	${mixins.flexRow}
`

export default SitesPage
