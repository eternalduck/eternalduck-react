import React, {useState, useEffect, useCallback} from "react"
import {Link, matchRoutes, useLocation} from "react-router-dom"
import styled from "styled-components"
import {media, colors, mixins} from "@style/vars-mixins/_index"
import {Icon, InlineIcon} from "@iconify/react"
import exiticon from "@iconify/icons-openmoji/exit"

const WorkItem = (props) => {
	let currentURL = useLocation().pathname

	return (
		<Item>
			<ItemInner bg={props.bg}>
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
			</ItemInner>
		</Item>
	)
}

export default WorkItem

const Item = styled.article`
	outline: 2px dashed magenta;
	flex: 1 0 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
	${media.md`
		flex: 0 1 50%;
		/* &:nth-child(2n){
			justify-content: flex-end;
		}
		&:nth-child(2n+1){
			justify-content: flex-start;
		} */
	`}
	${media.xl`
		flex: 0 1 33.33%;
		/* justify-content: flex-start;
		&:nth-child(3n){
			justify-content: flex-end;
		} */
	`}
`

const ItemInner = styled.div`
	/* flex: 0 0 45%; */
	/* display: grid;
	grid-template: "txt" 0.7fr "img" 2fr;// TODO */
	width: 96%;
	max-width: 320px;
	position: relative;
	padding: 30px 15px 15px;
	background: ${colors.almostWhite};
	border-radius: 2px;
	${mixins.boxShadowSmall(colors.almostBlack)};
	/* &:last-child {
		margin-right: auto;
	}
	&:nth-last-child(2) {
		margin-right: 50px;
	} */
	&:after {//small color stripe
		${mixins.defaultPseudo("100%", "15px")};
		background: ${props => props.bg};
	}
	${media.md`
		max-width: 300px;
		padding: 20px 15px 25px;
	`}
	${media.lg`
		max-width: 310px;
		padding: 35px 15px 25px;
		/* grid-template-columns: 3fr 2fr; */
	`}
	${media.xl`
		max-width: 320px;
		/* grid-template-columns: 3fr 2fr; */
	`}
	${media.xxl`
		max-width: 310px;
		/* grid-template-columns: 3fr 2fr; */
	`}
	
`
const Txt = styled.div`
	color: ${colors.almostBlack};
	margin-bottom: 10px;
	min-height: 260px;
	/* grid-area: txt; */
	${media.md`
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
	grid-area: img;
	width: 100%;
	margin: 0;
	${media.md`
		/* margin: 0 0 0 30px; */
		/* width: calc(100% - 30px); */
		${mixins.flexCenterContentVertically};
	`}
	& a {
		${mixins.hoverOpacity};
	}
`
const Img = styled.img`
	${mixins.boxShadowSmall()};
	width: 100%;
	object-fit: contain;
	object-position: center bottom;
`
