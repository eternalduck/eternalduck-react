import React, { useState, useEffect, useRef } from "react"
import {Outlet, useParams} from "react-router-dom"
import styled from "styled-components"
import {colors, mixins} from "@style/vars-mixins/_index"
import ContentWidth from "@components/Layout/ContentWidth"
import ContentWide from "@components/Layout/ContentWide"
import Loading from "@components/service/Loading"
import Page404 from "@pages/Page404"
// import Header from "@components/header-footer/Header"
import WorksNav from "./WorksNav"
import {InlineIcon} from "@iconify/react"
import exiticon from "@iconify/icons-openmoji/exit"

const SingleWork = (props) => {
	const worksList = props.data// sitesList or uxList expected
	const {itemSlug} = useParams()
	// Get data for the current work
	const currentWork = worksList.find(item => item.slug === itemSlug)
	const [work, setWork] = useState(w => w = currentWork)

	// Image changing tabs
	const [mainImgSrc, setMainImgSrc] = useState("")
	const [mainImgTitle, setMainImgTitle] = useState("")
	// set main image on first page load
	useEffect(() => {
		console.info("currentWork:")
		console.info(currentWork)
		work && setMainImgSrc(work.images[0].src)
		work && setMainImgTitle(work.images[0].title)
	}, [work])
	const replaceMainImg = (src, title) => {
		setMainImgSrc(src)
		setMainImgTitle(title)
	}
	const isCurrent = img => img === mainImgSrc
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
			{/* <Header/> */}
			{<WorksNav worksList={worksList} work={work}/>}

			<ContentWidth>
				<Title>{work.title}</Title>
				<Info>
					<p><b>{work.year}</b></p>
					<Url href={work.url} target="_blank">
						<span>{work.urlTxt}</span>
						{/*<InlineIcon icon={exiticon}/>*/}
					</Url>
				</Info>
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

			<ContentWide>
				<MainImgWrap>
					<Loading loaded={imgLoaded}/>
					<Img
						src={mainImgSrc}
						onLoad={() => setImgLoaded(true)}
						loaded={imgLoaded}
						alt={mainImgTitle}
					/>
				</MainImgWrap>
			</ContentWide>

			{/* <WorksNav worksList={worksList} work={work}/> */}
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
const Info = styled.div`
	text-align: center;
	margin-bottom: 20px;
	// color: ${props => props.theme.name === "dark" ? colors.pastelPink : colors.dustBlue};
`
const Url = styled.a`//TODO add external link icon
	display: block;
	font-size: 18px;
	${mixins.borderUnderline};
	color: ${props => props.theme.name === "dark" ? colors.mintGreen : colors.darkMintGreen};
	// & svg {
	// 	font-size: 20px;
	// 	margin-bottom: -4px;
	// 	& path {fill:  ${colors.almostWhite};}
	// }
`
const Description = styled.p`
	max-width: 700px;
	margin: 0 auto 30px;
`
const TabWrap = styled.div`
	display: flex;
	justify-content: center;
	column-gap: 30px;
	//padding: 50px 0 30px;
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
	margin: 30px 0 50px;
`
const Img = styled.img`
	visibility: ${props => props.loaded ? "visible" : "hidden"};
	max-width: 100%;
	height: ${props => props.loaded ? "auto" : "150px"};
	${mixins.boxShadowMid("#000")}
`
