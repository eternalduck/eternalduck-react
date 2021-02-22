import React, {useState, useEffect, useCallback} from "react"
import styled, {css, createGlobalStyle } from "styled-components"
import {colors, mixins, media} from "../../style/vars-mixins/_index"
import Header from "../header-footer/Header"
import ContentWidth from "../Layout/ContentWidth"
import WorkItem from "./WorkItem"
import {generateRandomBg} from "../helpers/generateRandomBg"
import Loading from "../service/Loading"


const WorksPage = (props) => {
	const worksList = props.data//sitesList or uxList expected, TODO add check
	const [bg, setBg] = useState("#333")
	// const theme = useState()

	useEffect(() => {
		// console.info(`WorksPage: current path: ${path}`)
		setBg(prev => generateRandomBg(worksList.length))
	}, [])

	return (
		<Works bg={props.bg}>
			<ContentWidth>
				<Header/>
				<WorksWrap>
					{worksList && worksList.map((item, i) =>
						<WorkItem key={item.slug}
							item={item}
							bg={bg[i]}
						/>
					)}
				</WorksWrap>
			</ContentWidth>
		</Works>
	)
}//WorksPage

const Works = styled.div`
	background: ${props => props.bg} url("images/circle.png") right bottom no-repeat;
`
const WorksWrap = styled.div`
	margin-top: 50px;
	padding-bottom: 100px;
`

export default WorksPage
