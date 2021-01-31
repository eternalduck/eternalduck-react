import React, { useState, useEffect, useRef } from "react"
// import ReactDOM from "react-dom"
import ContentWidth from "../Layout/ContentWidth"
import Header from "../header-footer/Header"
import {useParams} from "react-router-dom"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {sitesList} from "../data/sitesList"
import Preloader from "../service/Preloader"
import Page404 from "../service/Page404"
import Loading from "../service/Loading"
import SitesNav from "./SitesNav"


const SingleSite = (props) => {
	const {itemSlug} = useParams()
	// Get data for the current site
	const initial = () => sitesList.find(item => item.slug === itemSlug)
	const [site, setSite] = useState(initial())
	// Get prev/next for SitesNav
	const [prev, setPrev] = useState({"slug": "", "title": ""})//tmp
	const [next, setNext] = useState({"slug": "", "title": ""})

	 // Get current site index & indices for prev/next nav
	useEffect(() => {
		const siteIndex = sitesList.indexOf(site)
		const prevIndex = () => (siteIndex - 1) >= 0 ? siteIndex - 1 : ""
		const nextIndex = () => (siteIndex + 1) < sitesList.length ? siteIndex + 1 : ""
		//FAIL, undefined not caught
		const prevSlug = () => sitesList[prevIndex].slug
		const prevTitle = () => sitesList[prevIndex].title
		setPrev({slug: prevSlug, title: prevTitle})

		const nextSlug = () => sitesList[nextIndex].slug
		const nextTitle = () => sitesList[nextIndex].title
		setNext({slug: nextSlug, title: nextTitle})

		console.info(`siteIndex: ${siteIndex}`)
		console.info(`prevIndex: ${prevIndex()}`)
		console.info(`nextIndex: ${nextIndex()}`)
	}, [site])

//////////////////TEST////////////////
	useEffect(() => {
		console.info(`site:`)
		console.info(site)
	}, [site])
	// useEffect(() => {//tmp
	// 	console.info(`prevIndex: ${prevIndex}`)
	// 	console.info(`nextIndex: ${nextIndex}`)
	// }, [prevIndex])
	//
	useEffect(() => {
		console.info(`prev & next`)
		console.info(prev)
		console.info(next)
	}, [prev, next])
////////////////// end TEST////////////////

	// useEffect(() => {
	// 	setSite(() => sitesList.find(item => item.slug === itemSlug))
	// }, [])

	// const getPrevNextIndices = (siteIndex) => {
	// 	setPrevIndex((siteIndex) => (siteIndex - 1) >= 0 ? siteIndex - 1 : null)
	// 	setNextIndex((siteIndex) => (siteIndex + 1) < sitesList.length ? siteIndex + 1 : null)
	// 	console.info(`siteIndex: ${siteIndex}`)
	// 	console.info(`prevIndex: ${prevIndex}`)
	// 	console.info(`nextIndex: ${nextIndex}`)
	// }//getPrevNextIndices
// end get prev/next

// Image changing tabs
	const [mainImgSrc, setMainImgSrc] = useState("")
	const [mainImgTitle, setMainImgTitle] = useState("")
	const isCurrent = img => img === mainImgSrc
	// set main image on first page load
	useEffect(() => {
		site && setMainImgSrc(site.images[0].src)
		site && setMainImgTitle(site.images[0].title)
	}, [site])

	const replaceMainImg = (src, title) => {
		setMainImgSrc(src)
		setMainImgTitle(title)
	}

	useEffect(() => {
		isCurrent()
	}, [mainImgSrc])

//end Image changing tabs

	//  Load check for mainImg
	let [imgLoaded, setImgLoaded] = useState(false)//FAIL works only on img change, not on initial page load, useEffect doesn't help
	// reset img preloader state on tab switch
	useEffect(() => {
		setImgLoaded(false)
	}, [mainImgSrc])

	// useEffect(() => {
	// 	setImgLoaded(false)
	// }, [])

// end load check

////////////////////////// test /////////////
// 	useEffect(() => {
// 		console.info(`imgLoaded: ${imgLoaded}`)
// 	}, [imgLoaded])
	useEffect(() => {
		console.info(`mainImgSrc: ${mainImgSrc}`)
	}, [mainImgSrc])
////////////////////// end test /////////////
	return (
		!site ?
		<Page404/> :
		<>
		<ContentWidth>
			<Header/>
			<h1>{site.title}</h1>
			<p dangerouslySetInnerHTML={{__html: site.description}}></p>
			<SitesNav prev={{prev}} next={{next}}/>
			{/*{prev.slug || next.slug != "" && <SitesNav prev={prev} next={next}/>}*/}
			<Tmp>{imgLoaded ? "loaded" : "still loading"}</Tmp>
			<TabWrap>
				{site.images.map(image =>
					<Tab key={image.title}
						onClick={() => replaceMainImg(image.src, image.title)}
						current={isCurrent(image.src)}//FAIL
						className={isCurrent(image.src) ? "trueee" : "falseee"}
					>
						<span>{image.title}</span>
					</Tab>
				)}{/*images.map*/}
			</TabWrap>
		</ContentWidth>
		<MainImgWrap>
				<Loading loaded={imgLoaded}/>
				<Img
					src={mainImgSrc}
					onLoad={() => setImgLoaded(true)}
					loaded={imgLoaded}//for css
					alt={mainImgTitle}
				/>
		</MainImgWrap>
		</>
	)
}
export default SingleSite


const Tmp = styled.div`
	color: red;
	text-align: center;
	font-size: 25px;
`


const TabWrap = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 30px;
	margin: 50px 0 30px;
`
const Tab = styled.p`
	flex: 0 1 auto;
	font-size: 20px;
	cursor: pointer;
	${props => props.current && `${mixins.dashedUnderline}`};
	font-weight: ${props => props.current ? "bold" : "normal"};

`

const MainImgWrap = styled.div`
	// ${mixins.strictContentWidth}
	width: 100%;
	text-align: center;
	position: relative;
`
const Img = styled.img`
	// outline: ${props => props.loaded ? "none" : "5px dashed red"};
	 visibility: ${props => props.loaded ? "visible" : "hidden"};
	${mixins.boxShadowMid("#000")}//tmp color
	max-width: 100%;
`
