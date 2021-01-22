import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom"
import styled, {css, createGlobalStyle } from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {ConditionalWrapper} from "../helpers/conditionalWrapper"
import {isDeskXL} from "../helpers/responsive"
// import {generateRandomBg} from "../helpers/generateRandomBg"


const SiteItem = (props) => {
	let match = useRouteMatch()
	// const {isXL} = isDeskXL()
	// const [bg, setBg] = useState(() => {
	// 	generateRandomBg(10)
	// })
	// console.info(bg)

	// useEffect(()=> {
	//
	// }, [])
	return (
		<Item bg={props.bg}>
			<Meta bg={props.bg}>
				<ConditionalWrapper
					condition={props.item.hasSinglePage}
					wrapper={children =>
						<Link to={`${props.match}/${props.item.slug}`}>
							{children}
					</Link>
					}
				>
					<h3>{props.item.title}</h3>
				</ConditionalWrapper>
				<>
				{props.item.url &&
					<Url href={props.item.url} target={"_blank"}>
						<span>{props.item.urlTxt}</span>
					</Url>
				}
				{props.item.url2 &&
					<Url href={props.item.url2} target={"_blank"}>
						<span>{props.item.urlTxt2}</span>
					</Url>
				}
					<Info>
						<p>{props.item.keywords}</p>
						<p><b>{props.item.year}</b></p>
					</Info>
				</>
			</Meta>
			<Descr>
				<p>{props.item.descr}</p>
				{props.item.descrRu &&
					<p>{props.item.descrRu}</p>
				}
			</Descr>
			<ImgWrap>
				<ConditionalWrapper
					condition={props.item.hasSinglePage}
					wrapper={children =>
						<Link to={`${props.match}/${props.item.slug}`}>
							{children}
					</Link>
					}
				>
						<Img
							src={props.item.thumb}
							alt={props.item.title}
						/>
				</ConditionalWrapper>
			</ImgWrap>
		</Item>
	)
}

export default SiteItem

//different layout & style on MD only!!
const Item = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 100%;
	max-width: 540px;
	position: relative;
	margin: 0 auto 60px;
	background: #fff;
	// background: ${colors.almostWhite};
	//background: #000;//tmp
	${mixins.boxShadowSmall(colors.almostBlack)};
	&:after {//small color stripe
		content: "";
		display: block;
		position: absolute;
		height: 10px;
		left: 0;
		right: 0;
		bottom: -10px;
		background: ${props => props.bg};
	}
	${media.md`
		max-width: none;
		flex-flow: row wrap;
		min-height: 560px;
	`}
	${media.xl`
		max-width: 1100px;
		min-height: 480px;
		flex-flow: row nowrap;
		align-items: stretch;
		margin: 0 auto 70px;
		&:after {
			display: none
		}
	`}
`

const Meta = styled.div`
	flex: 1;
	background: ${props => props.bg};
	padding: 30px 15px;
	color: #fff;
	 ${mixins.boxShadowSmall()};
	& a {color: #fff;}
	${media.md`
		padding: 30px 20px;
		flex: 1 0 100%;
	`}
	${media.xl`
		flex: 0 0 auto;
		width: 320px;
		// height: 100%;
		display: flex;
		flex-flow: column;
		// align-content: flex-start;
		justify-content: space-between;
		padding: 50px 40px;
	`}
`

// const Title = styled.h3`
//
// `
const Url = styled.a`
	display: block;
	font-size: 18px;
	font-weight: bold;
	margin-top: 20px;
	margin-bottom: 20px;
	${mixins.borderUnderline};
`

const Info = styled.div`
	font-size: 15px;
	& p:first-child {
		margin-bottom: 15px;
	}
	& p:last-child {
		margin-bottom: 0;
	}
	${media.md`
		width: 45%;
	`}
	${media.xl`
		width: auto;
	`}
`

const Descr = styled.div`
	flex: 1;
	color: ${colors.almostBlack};
	padding: 30px 15px;
	${media.md`
		padding: 30px 20px;
	`}
	//  
	${media.xl`
		${mixins.flexCenterContent};
		padding: 30px;
	`}
`

const ImgWrap = styled.div`
	//flex: 1;
	width: 100%;
	min-height: 350px;
	overflow: hidden;
	// ${mixins.noUnderline};
	 ${mixins.boxShadowSmall()};
	${media.md`
		width: 367px;
		height: 440px;
		min-height: none;
		margin: -120px 15px 30px 0;
		${mixins.flexCenterContent};
	`}
	${media.lg`
		width: 417px;
		height: 500px;
	`}
	${media.xl`
		flex: 0 0 auto;
		width: 400px;
		height: 100%;
		margin: 0;
	`}
	& a {//fail
		transition: opacity .2s ease-in;
		&:hover {
			opacity: .95;
		}
	}
`

const Img = styled.img`
	object-fit: cover;
	width: 100%;
	display: block;
	${media.xl`
		object-fit: center;
	`}
`

