import React, {useState, useEffect, useCallback} from "react"
import {Link, matchRoutes, useLocation} from "react-router-dom"
import styled from "styled-components"
import {media, colors, mixins} from "@style/vars-mixins/_index"
import {Icon, InlineIcon} from "@iconify/react"
import exiticon from "@iconify/icons-openmoji/exit"

const WorkItem = (props) => {
	let currentURL = useLocation().pathname

	return (
		<Item bg={props.bg}>
			<Txt>
				<Title>
					<Link to={`${currentURL}/${props.item.slug}`}>
						<span>{props.item.title}</span>
					</Link>
				</Title>
				<>
				{props.item.urls &&
				// Show only one url for brevity
					<Url>
						<a href={props.item.urls[0].url} target={"_blank"} rel={"noreferrer"}>
							<span>{props.item.urls[0].txt}</span>
							{/*<Icon icon={exiticon}/>*/}
						</a>
					</Url>
				}
					<Info>
						<p><b>{props.item.year}</b></p>
						<p>{props.item.keywords}</p>
					</Info>
				</>
			{/* <Descr dangerouslySetInnerHTML={{__html: props.item.description}}/> */}
			</Txt>
			<ImgWrap>
				<Link to={`${currentURL}/${props.item.slug}`}>
					<Img src={props.item.thumb} alt={props.item.title}/>
				</Link>
			</ImgWrap>
		</Item>
	)
}

export default WorkItem

const Item = styled.div`
	/* flex: 0 0 45%; */
	width: 96%;
	position: relative;
	margin: 0 auto 40px;
	padding: 15px 10px 10px 20px;
	background: ${colors.almostWhite};
	border-radius: 2px;
	${mixins.boxShadowSmall(colors.almostBlack)};
	&:after {//small color stripe
		${mixins.defaultPseudo("15px", "100%")};
		background: ${props => props.bg};
	}
	${media.md`
		/* display: grid;
		grid-template: "txt img" auto / 1fr 1fr; */
		max-width: 280px;
		padding: 20px 10px 10px 25px;
		&:after {
			${mixins.defaultPseudo("15px", "100%")};
		}
	`}
	${media.lg`
		max-width: 350px;
		/* grid-template-columns: 3fr 2fr; */
	`}
`
const Txt = styled.div`
	color: ${colors.almostBlack};
	margin-bottom: 10px;
	${media.md`
		grid-area: txt;
		margin-bottom: 0;
	`}
	& a {color: ${colors.almostBlack};
`
const Title = styled.h3`
	${mixins.borderUnderline};
	margin-bottom: 15px;
`

const Url = styled.p`
	${mixins.borderUnderline};
	font-weight: bold;
	margin-bottom: 10px;
	${media.md`
		margin: 15px 0;
		font-size: 14px;
	`}
	& a {
		color: ${colors.dustBlue};
		display: inline-block;
		&:first-child {
			margin-right: 15px;
		}
	}
	& svg {//icon
		font-size: 20px;
		margin-bottom: -5px;
		margin-left: 3px;
	}
`
const Info = styled.div`
	font-size: 15px;
	color: ${colors.dustBlue};
	margin-bottom: 15px;
	${media.md`
		margin-bottom: 20px;
	`}
`
/* const Descr = styled.div`
	//outline: 1px dashed magenta;
	color: ${colors.almostBlack};
	margin-bottom: 15px;
	${media.md`
		margin-bottom: 0;
	`}
` */
const ImgWrap = styled.div`
	/* outline: 1px dotted red; */
	width: 98%;
	margin: 0;
	${media.md`
		/* grid-area: img; */
		width: calc(100% - 30px);
		/* margin: 0 0 0 30px; */
		${mixins.flexCenterContentVertically};
	`}
	& a {
		${mixins.hoverOpacity};
	}
`
const Img = styled.img`
	${mixins.boxShadowSmall()};
	object-fit: contain;
	object-position: center bottom;
	width: 100%;
`
