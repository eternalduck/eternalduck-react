import React, { useState, useEffect, useRef } from "react"
// import ReactDOM from "react-dom"
import ContentWidth from "../Layout/ContentWidth"
import Header from "../Header/Header"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {sitesList} from "../data/sitesList"
import Page404 from "../Page404/Page404"


const SingleSite = (props) => {
	let {path, url} = useRouteMatch()
	const {itemSlug} = useParams()
	const [itemData, setItemData] = useState({})
	//get data for the current site, TODO: why too many times??
	useEffect(() => {
	// 	console.info(`itemSlug: ${itemSlug}`)
		setItemData(prev => sitesList.find(item => item.slug === itemSlug))
	}, [])
console.info(itemData)

// Image changing tabs
// 	const [mainImgSrc, setMainImgSrc] = useState("")
// 	useEffect(() => {
		// setMainImgSrc(itemData().images[0].src)
	// }, [])
// 	const [isCurrent, setIsCurrent] = useState(true)
// 	// const mainImg = useRef()
// 	useEffect(() => {
// 		// setMainImgSrc(mainImg.current.src)
// 		setIsCurrent(imgurl => imgurl === mainImgSrc ? true : false)
// 		console.info(`isCurrent: ${isCurrent}`)
// 	}, [mainImgSrc])
// 	const replaceMainImg = (imgurl) => {
// 		// mainImg.current.src = imgurl
// 		// debugger
// 		setMainImgSrc(imgurl)
// 		console.info(`imgurl: ${imgurl}, mainImgSrc: ${mainImgSrc}`)
//
// 	}

//end Image changing tabs
	return (
		// itemData ?
		<ContentWidth>
			<Header/>
			{/*{console.info(`isCurrent: ${isCurrent}}`)}*/}

			<h1>{itemData.title}</h1>
			{/*<p dangerouslySetInnerHTML={{__html: itemData.description}}></p>*/}
			<TabWrap>
				{itemData.images.map(image =>
					<Tab key={image.title}
						// onClick={() => replaceMainImg(image.src)}
						// current={isCurrent}//FAIL
					>
						<span>{image.title}</span>
					</Tab>
				)}{/*images.map*/}
			</TabWrap>
			<MainImgWrap>
				<img //ref={mainImg}
					src={"mainImgSrc"}
					alt={""}
					// alt={itemData.images[0].title}
				/>
			</MainImgWrap>
		</ContentWidth>
		// :
		// 	<p>HUi</p>
		// {/*// <Page404/>*/}

	)
}
export default SingleSite

const TabWrap = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 30px;
	margin: 50px 0;
`
const Tab = styled.p`
	flex: 0 1 auto;
	//color: #fff;
	font-size: 18px;
	cursor: pointer;
	${mixins.dashedUnderline};
	// color: ${props => props.current ? "red" : "#fff"};//tmp
	// font-weight: ${props => props.current ? "bold" : "normal"};

`

const MainImgWrap = styled.div`
	// ${mixins.strictContentWidth}
	width: 100%;
	text-align: center;
	& img {
		${mixins.boxShadowMid("#000")}//tmp color
		max-width: 100%;
	}
`
