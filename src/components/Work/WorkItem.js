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
				{props.item.url &&
					<Url>
						<a href={props.item.url} target={"_blank"} rel={"noreferrer"}>
							<span>{props.item.urlTxt}</span>
							{/*<Icon icon={exiticon}/>*/}
						</a>
						{props.item.url2 &&
							<a href={props.item.url2} target={"_blank"} rel={"noreferrer"}>
								<span>{props.item.urlTxt2}</span>
							</a>
						}
					</Url>
				}
					<Info>
						<p><b>{props.item.year}</b></p>
						<p>{props.item.keywords}</p>
					</Info>
				</>
			<Descr dangerouslySetInnerHTML={{__html: props.item.description}}/>
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
	width: 100%;
	position: relative;
	margin: 0 auto 40px;
	padding: 20px 15px 15px 25px;
	background: ${colors.almostWhite};
	border-radius: 2px;
	${mixins.boxShadowSmall(colors.almostBlack)};
	&:after {//small color stripe
		${mixins.defaultPseudo("15px", "100%")};
		background: ${props => props.bg};
	}
	${media.md`
		display: grid;
		grid-template: "txt img" auto / 1fr 1fr;
		max-width: 800px;
		padding: 30px 15px 15px 35px;
		&:after {
			${mixins.defaultPseudo("20px", "100%")};
		}
	`}
	${media.lg`
		grid-template-columns: 3fr 2fr;
	`}
`
const Txt = styled.div`
	color: ${colors.almostBlack};
	margin-bottom: 12px;
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
	margin-bottom: 15px;
	${media.md`
		margin: 20px 0;
		font-size: 18px;
	`}
	& a {
		color: ${colors.dustBlue};
		display: inline-block;
		&:first-child {
			margin-right: 20px;
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
const Descr = styled.div`
	//outline: 1px dashed magenta;
	color: ${colors.almostBlack};
	margin-bottom: 15px;
	${media.md`
		margin-bottom: 0;
	`}
`
const ImgWrap = styled.div`
	outline: 1px dotted red;
	width: 60%;
	margin: 0 auto;
	${media.md`
		grid-area: img;
		width: calc(100% - 30px);
		margin: 0 0 0 30px;
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
