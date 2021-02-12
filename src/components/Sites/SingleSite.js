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
	const initial = sitesList.find(item => item.slug === itemSlug)
	const [site, setSite] = useState(s => s = initial)

	 // Get data for prev/next nav based on current site index
	const [navLinks, setNavLinks] = useState({prev: {slug: "", title: ""}, next: {slug: "", title: ""}})
	useEffect(() => {
		const populateNav = () => {
			// TODO skip pages with hasSinglePage: false
			// TODO move this logic to sitesNav
			//const sitesWithSinglePages = sitesList.filter()//todo
			const siteIndex = sitesList.indexOf(site)
			const prevIndex = (siteIndex - 1) >= 0 ? siteIndex - 1 : null
			const nextIndex = (siteIndex + 1) < sitesList.length ? siteIndex + 1 : null
			const prevSlug = prevIndex != null ? sitesList[prevIndex].slug : ""
			const prevTitle = prevIndex != null ? sitesList[prevIndex].title : ""
			const nextSlug = nextIndex != null ? sitesList[nextIndex].slug : ""
			const nextTitle = nextIndex != null ? sitesList[nextIndex].title : ""

			// console.info(`populateNav fired`)

			return {
				prev: {slug: prevSlug, title: prevTitle},
				next: {slug: nextSlug, title: nextTitle},
			}
			// console.info(`
			// 	prevIndex: ${prevIndex}, nextIndex: ${nextIndex}
			// 	prevSlug: ${prevSlug}, prevTitle: ${prevTitle};
			// 	nextSlug: ${nextSlug}, nextTitle: ${nextTitle}
			// `)
		}//populateNav
		setNavLinks(n => n = populateNav())
		console.info(`useEffect[site] called`)
	}, [site])

	//////////////////TEST////////////////
		useEffect(() => {
			//WTF called twice?? just find out why
			const {next: {slug}} = navLinks
			console.info(navLinks)
			console.info(`next: ${slug}`)//FAIL undefined for first time
			console.info(`useEffect[navLinks] called`)
		}, [navLinks])
	////////////////// end TEST////////////////

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

	return (
		!site ?
		<Page404/> :
		<Site>
			<ContentWidth>
				<Header/>
				<SitesNav nav={navLinks}/>
				<Title>{site.title}</Title>
				<Description dangerouslySetInnerHTML={{__html: site.description}}></Description>
				<TMP>{imgLoaded ? "loaded" : "still loading"}</TMP>
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

			<MainImgWrap bg={props => props.theme.singleSiteBg}>
				<Loading loaded={imgLoaded}/>
				<Img
					src={mainImgSrc}
					onLoad={() => setImgLoaded(true)}
					loaded={imgLoaded}//for css
					alt={mainImgTitle}
				/>
			</MainImgWrap>
			<ContentWidth>
				<SitesNav nav={navLinks}/>
			</ContentWidth>
		</Site>
	)
}
export default SingleSite

const TMP = styled.div`
	color: red;
	text-align: center;
	font-size: 25px;
`
const Site = styled.div`
	background: ${props => props.theme.singleSiteBg};
	color: ${props => props.theme.txtClr};
`


const Title = styled.h1`
	text-align: center;
`
const Description = styled.p`
	max-width: 700px;
	margin-left: auto;
	margin-right: auto;
`
const TabWrap = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 30px;
	padding: 50px 0 30px;
`
const Tab = styled.p`
	//padding: 2px 8px;
	//background: ${colors.transpWhite};
	flex: 0 1 auto;
	font-size: 20px;
	cursor: pointer;
	${props => props.current && `${mixins.dashedUnderline}`};
	font-weight: ${props => props.current ? "bold" : "normal"};
`
const MainImgWrap = styled.div`
	// ${mixins.strictContentWidth}
	background: ${props => props.bg};
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
