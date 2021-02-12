import React, {useState, useEffect, useCallback} from "react"
import ReactDOM from "react-dom"
import {Link, useRouteMatch} from "react-router-dom"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {ConditionalWrapper} from "../helpers/conditionalWrapper"

const SiteItem = (props) => {
	let {path, url} = useRouteMatch()

	//"/users/:userId". match.path would be "/users/:userId" while match.url would have the :userId value filled in, e.g. "users/5"

	return (
		<Item bg={props.bg}>
			<Meta bg={props.bg}>
				<ConditionalWrapper
					condition={props.item.hasSinglePage}
					wrapper={children =>
						<Link to={`${url}/${props.item.slug}`}>
							{children}
						</Link>
					}
				>
					<Title><span>{props.item.title}</span></Title>
				</ConditionalWrapper>
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
			</Meta>
			{/*<Descr><>{props.item.description}</></Descr>*/}
			<Descr dangerouslySetInnerHTML={{__html: props.item.description}}/>
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

export default SiteItem

const Item = styled.div`
	width: 100%;
	max-width: 500px;
	position: relative;
	margin: 0 auto 60px;
	padding-bottom: 10px;//space for color stripe
	background: ${colors.almostWhite};
	${mixins.boxShadowSmall(colors.almostBlack)};
	${media.md`
		display: flex;
		flex-flow: row wrap;
		max-width: 900px;
	`}
	&:after {//small color stripe
		${mixins.defaultPseudo("100%", "10px")};
		top: auto;
		bottom: -10px;
		background: ${props => props.bg};
	}
`

const Meta = styled.div`
	${mixins.boxShadowSmall()};
	position: relative;
	background: ${props => props.bg};
	padding: 20px;
	color: #fff;
	${media.md`
		flex: 1;
		padding: 25px;
		flex: 1 0 100%;
	`}
	${media.lg`
		padding: 30px;
	`}
	& a {color: #fff;}
	// &:before {//overlay
	// 	${mixins.defaultPseudo()};
	// 	background: ${colors.transpBlack};
	// 	z-index: 0;
	// }
`
const Title = styled.h3`
	${mixins.borderUnderline};
	//position: relative;
	//z-index: 5;
`

const Url = styled.p`
	${mixins.borderUnderline};
	font-weight: bold;
	font-size: 15px;
	margin: 10px 0;
	//position: relative;
	//z-index: 5;
	${media.md`
		font-size: 18px;
		margin: 20px 0;
		width: 55%;
	`}
	& a {
		display: inline-block;
		&:first-child {
			margin-right: 20px;
		}
	}
`

const Info = styled.div`
	font-size: 14px;
	//position: relative;
	//z-index: 5;
	& p:first-child {
		margin-bottom: 10px;
	}
	& p:last-child {
		margin-bottom: 0;
	}
	${media.md`
		font-size: 16px;
		width: 55%;
		& p:first-child {
			margin-bottom: 15px;
		}
	`}
`

const Descr = styled.div`
	flex: 1;
	color: ${colors.almostBlack};
	padding: 20px;
	${media.md`
		flex: 0 1 60%;
		padding: 25px;
	`}
	${media.lg`
		padding: 30px;
		${mixins.flexCenterContentVertically};
	`}
`

const ImgWrap = styled.div`
	//outline: 2px solid red;
	position: relative;
	width: 80%;
	margin: 0 auto 20px;
	${media.sm`
		width: 70%;
	`}
	${media.md`
		width: calc(40% - 21px);
		// min-height: 200px;
		margin: -120px 20px 0 0;
		// margin: 0 20px 20px 0;
		align-self: flex-end;
	`}
	${media.lg`
		// height: 250px;
		margin: -150px 20px 0 0;
	`}
	& a {
		transition: opacity .2s ease-in;
		&:hover {
			
			opacity: .95;
		}
	}
`

const Img = styled.img`
	//outline: 1px dashed orange;
	${mixins.boxShadowSmall()};
	object-fit: contain;
	object-position: center bottom;
	width: 100%;
	// ${media.md`
	// 	position: absolute;
	// 	bottom: 0;
	// 	right: 0;
	// 	height: 170%;
	// `}
`

