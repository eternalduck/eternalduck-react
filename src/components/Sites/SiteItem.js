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
import {isTablet} from "../helpers/responsive"
// import {generateRandomBg} from "../helpers/generateRandomBg"


const SiteItem = (props) => {
	let match = useRouteMatch()
	const {isTabl} = isTablet()
	// const [bg, setBg] = useState(() => {
	// 	generateRandomBg(10)
	// })
	// console.info(bg)

	// useEffect(()=> {
	//
	// }, [])
	return (
		<ItemBase bg={props.bg}>
			{isTabl ?
				//tablet version
				<p bg={props.bg}>tabl version</p>
				: //desk&mob version
				<>
				<ColorWrap bg={props.bg}>
					<ConditionalWrapper
						condition={props.item.hasSinglePage}
						wrapper={children =>
							<Link to={`${props.match}/${props.item.slug}`}>
								{children}
						</Link>
						}
					>
						<Title>{props.item.title}</Title>
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
					<Keywords>{props.item.keywords}</Keywords>
					</>
				</ColorWrap>
				<Descr>
					<p>{props.item.descr}</p>
					{props.item.descrRu &&
						<p>{props.item.descrRu}</p>
					}
				</Descr>
				<ConditionalWrapper
					condition={props.item.hasSinglePage}
					wrapper={children =>
						<Link to={`${props.match}/${props.item.slug}`}>
							{children}
					</Link>
					}
				>
					<ImgWrap>
						<Img
							src={props.item.thumb}
							alt={props.item.title}
						/>
					</ImgWrap>
				</ConditionalWrapper>
				</>
			}{/*isTabl*/}
		</ItemBase>
	)
}

export default SiteItem

//different layout & style on MD only!!
const ItemBase = styled.div`
	width: 100%;
	position: relative;
	margin: 0 auto 40px;
	background: #000;
	//background: ${colors.almostWhite};
	${mixins.boxShadowSmall(colors.almostBlack)};
	${media.md`
		margin: 0 0 50px;
	`}
	${media.lg`
		width: 47%;
	`}
	&:after {
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 15px;
		left: 0;
		bottom: 0;
		// background: {randomBgg};
		background: ${props => props.bg};
		${media.mdOnly`
			height: 100%;
			width: 15px;
			left: 0;
			bottom: 0;
		`}
	}
`

const ColorWrap = styled.div`
	text-align: center;
	background: ${props => props.bg};
	padding: 30px 15px;
	${media.md`
		padding: 40px 30px;
	`}
	${media.lg`
		padding: 40px 20px 20px;
	`}
	${media.xl`
		padding: 40px 30px 20px;
	`}

`

const Title = styled.h3`
	font-size: 26px;
	color: #fff;
	${media.md`
		font-size: 28px;
	`}
	${media.lg`
		font-size: 34px;
	`}
`


const ImgWrap = styled.div`
	outline: 1px dashed red;
	display: block;
	width: 100%;
	text-align: center;
	margin-bottom: 50px;
	//height: 250px;
	//overflow: hidden;//?
	${mixins.noUnderline};
	a &:hover {
		opacity: .9;
	}
`

const Img = styled.img`
	object-fit: cover;
	max-width: 100%;
	${mixins.boxShadowSmall(colors.almostBlack)};
	transition: opacity .2s ease-in;
`
const Keywords = styled.p`
	margin: 15px 0;
	text-align: center;
	color: #fff;
	//color: ${colors.black3};
`
const Url = styled.a`
	display: block;
	color: #fff;
	${mixins.borderUnderline};
`

const Descr = styled.div`
	color: #fff;
	//color: ${colors.almostBlack};
	padding: 30px 15px;
	${media.md`
		padding: 40px 30px;
	`}
	${media.lg`
		padding: 25px 20px 20px;
	`}
	${media.xl`
		padding: 25x 30px 20px;
	`}

`
