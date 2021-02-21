import React, {useState, useEffect, useCallback} from "react"
import ReactDOM from "react-dom"
import {Link, useRouteMatch} from "react-router-dom"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {ConditionalWrapper} from "../helpers/conditionalWrapper"

const WorkItem = (props) => {
	let {path, url} = useRouteMatch()

	//"/users/:userId". match.path would be "/users/:userId" while match.url would have the :userId value filled in, e.g. "users/5"

	return (
		<Item bg={props.bg}>
			<Txt>
				<Title>
					<ConditionalWrapper
						condition={props.item.hasSinglePage}
						wrapper={children =>
							<Link to={`${url}/${props.item.slug}`}>
								<span>{children}</span>
							</Link>
					}>{props.item.title}</ConditionalWrapper>
				</Title>
				<>
				{props.item.url &&
					<Url>
						<a href={props.item.url} target={"_blank"} rel={"noreferrer"}>
							<span>{props.item.urlTxt}</span>
						</a>
						{props.item.url2 &&
							<a href={props.item.url2} target={"_blank"} rel={"noreferrer"}>
								<span>{props.item.urlTxt2}</span>
							</a>
						}
					</Url>
				}
					<Info>
						<p>{props.item.keywords}</p>
						<p><b>{props.item.year}</b></p>
					</Info>
				</>
			<Descr dangerouslySetInnerHTML={{__html: props.item.description}}/>
			</Txt>
			<ImgWrap>
				<ConditionalWrapper
					condition={props.item.hasSinglePage}
					wrapper={children =>
						<Link to={`${url}/${props.item.slug}`}>
							{children}
						</Link>}
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

export default WorkItem

const Item = styled.div`
	width: 100%;
	max-width: 500px;
	position: relative;
	margin: 0 auto 60px;
	padding: 30px 20px 20px 35px;
	background: ${colors.almostWhite};
	${mixins.boxShadowSmall(colors.almostBlack)};
	&:after {//small color stripe
		${mixins.defaultPseudo("15px", "100%")};
		background: ${props => props.bg};
	}
	${media.md`
		max-width: 800px;
		display: grid;
		grid-template: "txt img" auto / 1fr 1fr;
		padding: 40px 30px 30px 40px;
		&:after {
			${mixins.defaultPseudo("20px", "100%")};
		}
	`}
	${media.lg`
		grid-template-columns: 3fr 2fr;
	`}
`

const Txt = styled.div`
	//outline: 2px dashed orange;
	color: ${colors.almostBlack};
	margin-bottom: 15px;
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
	font-size: 18px;
	margin-bottom: 15px;
	${media.md`
		margin: 20px 0;
	`}
	& a {
		color: ${colors.dustBlue};
		display: inline-block;
		&:first-child {
			margin-right: 20px;
		}
	}
`

const Info = styled.div`
	font-size: 15px;
	color: ${colors.dustBlue};
	margin-bottom: 20px;
`

const Descr = styled.div`
	//outline: 1px dashed magenta;
	color: ${colors.almostBlack};
	margin-bottom: 20px;
	${media.md`
		margin-bottom: 0;
	`}
`

const ImgWrap = styled.div`
	//outline: 2px dotted red;
	width: 70%;
	margin: 0 auto;
	${media.sm`
		width: 60%;
	`}
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

