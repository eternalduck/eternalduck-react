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
	//get data for the current site, TODO: why called too many times, WTF?? put this to useEffect? how??
	const dataAAA = (site) => sitesList.find(item => item.slug === site//FAIL!!!!!!!!!!!! takes only 1st item always
	)
	const data = dataAAA(itemSlug)
	console.info(data)
	// useEffect(() => {
	//
	// }, [])

// Image changing tabs
	const [mainImgSrc, setMainImgSrc] = useState("")
	useEffect(() => {
		setMainImgSrc(data.images[0].src)
	}, [])
	useEffect(() => {
		isCurrent()
	}, [mainImgSrc])

	const replaceMainImg = (imgurl) => {
		setMainImgSrc(imgurl)
	}
	function isCurrent (img) {
		// console.info(`img: ${img}, mainImgSrc: ${mainImgSrc}`)
		img === mainImgSrc
		return
	}
//end Image changing tabs

	return (
		data.title ?
		<ContentWidth>
			<Header/>
			<h1>{data.title}</h1>
			<p dangerouslySetInnerHTML={{__html: data.description}}></p>
			<TabWrap>
				{data.images.map(image =>
					<Tab key={image.title}
						onClick={() => replaceMainImg(image.src)}
						current={isCurrent(image.src)}//FAIL
						className={isCurrent(image.src) ? "trueee" : "falseee"}
					>
						<span>{image.title}</span>
					</Tab>
				)}{/*images.map*/}
			</TabWrap>
			<MainImgWrap>
				<img //ref={mainImg}
					src={mainImgSrc}
					alt={""}
					// alt={itemData.images[0].title}
				/>
			</MainImgWrap>
		</ContentWidth>
		: <Page404/>

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
	//${props => props.current && `${mixins.dashedUnderline}`};
	color: ${props => props.current ? "red" : "#fff"};//tmp
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
