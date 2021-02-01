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
			<Descr>
				<p dangerouslySetInnerHTML={{__html: props.item.description}}></p>
			</Descr>
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
	display: flex;
	flex-flow: column nowrap;
	width: 100%;
	max-width: 500px;
	position: relative;
	margin: 0 auto 60px;
	background: #000;//tmp
	// background: ${colors.almostWhite};
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
		max-width: 900px;
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
	padding: 20px 15px;
	color: #fff;
	${mixins.boxShadowSmall()};
	& a {color: #fff;}
	${media.sm`
		padding: 30px 20px;
	`}
	${media.md`
		flex: 1 0 100%;
	`}
	${media.xl`
		flex: 0 0 auto;
		width: 320px;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		padding: 50px 40px;
	`}
`
const Title = styled.h3`
	${mixins.borderUnderline};
	text-align: center;
	${media.md`
		text-align: left;
	`}
`


const Url = styled.p`
	${mixins.borderUnderline};
	font-weight: bold;
	font-size: 15px;
	margin: 10px 0;
	//text-align: center;
	${media.md`
		// text-align: left;
		font-size: 18px;
		margin: 20px 0;
	`}
	& a {
		display: inline-block;
		// ${mixins.borderUnderline};
		&:first-child {
			margin-right: 20px;
		}
	}
`

const Info = styled.div`
	font-size: 14px;
	//text-align: center;
	& p:first-child {
		margin-bottom: 10px;
	}
	& p:last-child {
		margin-bottom: 0;
	}
	${media.md`
		// text-align: left;
		font-size: 16px;
		width: 45%;
		& p:first-child {
			margin-bottom: 15px;
		}
	`}
	${media.xl`
		width: auto;
	`}
`

const Descr = styled.div`
	flex: 1;
	//color: ${colors.almostBlack};
	color: ${colors.almostWhite};//tmp
	padding: 20px 15px;
	${media.sm`
		padding: 30px 20px;
	`}
	${media.xl`
		${mixins.flexCenterContent};
		padding: 30px;
	`}
	& a {color: darkred}//tmo
`

const ImgWrap = styled.div`
	//flex: 1;
	width: 80%;
	margin: 0 10% 15px;
	//height: 200px;
	//min-height: 300px;
	overflow: hidden;
	// ${mixins.noUnderline};
	 ${mixins.boxShadowSmall()};
	${media.sm`
		width: 70%;
		margin: 0 15% 20px;
	`}
	${media.md`
		width: 333px;
		height: 400px;
		min-height: none;
		margin: -120px 15px 30px 0;
		${mixins.flexCenterContent};
	`}
	${media.lg`
		width: 367px;
		height: 440px;

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

