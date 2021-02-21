import React, { useState, useEffect, useRef } from "react"
// import ReactDOM from "react-dom"
import ContentWidth from "../Layout/ContentWidth"
import Header from "../header-footer/Header"
import {useParams} from "react-router-dom"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import Page404 from "../service/Page404"
import Loading from "../service/Loading"
import WorksNav from "./WorksNav"


const SingleWork = (props) => {
	const worksList = props.data//sitesList or uxList expected, TODO add check
	const {itemSlug} = useParams()
	// Get data for the current work
	const initial = worksList.find(item => item.slug === itemSlug)
	const [work, setWork] = useState(w => w = initial)

	// Get data for prev/next nav based on current work index
	const [navLinks, setNavLinks] = useState({prev: {slug: "", title: ""}, next: {slug: "", title: ""}})
	useEffect(() => {
		const populateNav = () => {
			// TODO skip pages with hasSinglePage: false
			//const worksWithSinglePages = worksList.filter()
			// TODO move this logic to worksNav!!!!!
			const workIndex = worksList.indexOf(work)
			const prevIndex = (workIndex - 1) >= 0 ? workIndex - 1 : null
			const nextIndex = (workIndex + 1) < worksList.length ? workIndex + 1 : null
			const prevSlug = prevIndex != null ? worksList[prevIndex].slug : ""
			const prevTitle = prevIndex != null ? worksList[prevIndex].title : ""
			const nextSlug = nextIndex != null ? worksList[nextIndex].slug : ""
			const nextTitle = nextIndex != null ? worksList[nextIndex].title : ""
			return {
				prev: {slug: prevSlug, title: prevTitle},
				next: {slug: nextSlug, title: nextTitle},
			}
		}//populateNav

		setNavLinks(n => n = populateNav())
	}, [work])
	// end get prev/next

	// Image changing tabs
	const [mainImgSrc, setMainImgSrc] = useState("")
	const [mainImgTitle, setMainImgTitle] = useState("")
	const isCurrent = img => img === mainImgSrc
	// set main image on first page load
	useEffect(() => {
		work && setMainImgSrc(work.images[0].src)
		work && setMainImgTitle(work.images[0].title)
	}, [work])

	const replaceMainImg = (src, title) => {
		setMainImgSrc(src)
		setMainImgTitle(title)
	}

	useEffect(() => {
		isCurrent()
	}, [mainImgSrc])

	//end Image changing tabs

	// Load check for mainImg
	//TODO: bug: works only on img change & initial page load, but not on refresh - useEffect doesn't help
	let [imgLoaded, setImgLoaded] = useState(false)

	// reset img preloader state on tab switch
	useEffect(() => {
		setImgLoaded(false)
	}, [mainImgSrc])

// end load check

	return (
		!work ?
		<Page404/> :
		<Work bg={props.bg}>
			<ContentWidth>
				<Header/>
				<WorksNav nav={navLinks}/>
				<Title>{work.title}</Title>
				<Description dangerouslySetInnerHTML={{__html: work.description}}></Description>
				<TabWrap>
					{work.images.map(image =>
						<Tab key={image.title}
							onClick={() => replaceMainImg(image.src, image.title)}
							current={isCurrent(image.src)}
							className={isCurrent(image.src) ? true : false}
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
					loaded={imgLoaded}
					alt={mainImgTitle}
				/>
			</MainImgWrap>
			<ContentWidth>
				<WorksNav nav={navLinks}/>
			</ContentWidth>
		</Work>
	)
}
export default SingleWork

const Work = styled.div`
	background: ${props => props.bg};
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
	flex: 0 1 auto;
	font-size: 20px;
	cursor: pointer;
	${props => props.current && `${mixins.dashedUnderline}`};
	font-weight: ${props => props.current ? "bold" : "normal"};
`
const MainImgWrap = styled.div`
	width: 100%;
	text-align: center;
	position: relative;
`
const Img = styled.img`
	visibility: ${props => props.loaded ? "visible" : "hidden"};
	${mixins.boxShadowMid("#000")}
	max-width: 100%;
`
