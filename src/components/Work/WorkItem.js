import React, {useState, useEffect, useCallback} from "react";
import {Link, matchRoutes, useLocation} from "react-router-dom";
import styled from "styled-components";
import {media, colors, mixins} from "@style/vars-mixins/_index";
import {Icon, InlineIcon} from "@iconify/react";
import exiticon from "@iconify/icons-openmoji/exit";

const WorkItem = (props) => {
	let currentURL = useLocation().pathname;

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
	);
};

export default WorkItem;

const Item = styled.article`
	/* outline: 1px dashed magenta; */
	flex: 1 0 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
	${media.md`
		padding-right: 15px;
		padding-left: 15px;
		flex: 0 1 50%;
	`}
	${media.xl`
		flex: 0 1 33.33%;
	`}
	${media.xxl`
		flex: 0 1 25%;
	`}
`;

const ItemInner = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	padding: 30px 15px 15px;
	background: ${colors.almostWhite};
	border-radius: 2px;
	${mixins.boxShadowSmall(colors.almostBlack)};
	&:after {//small color stripe
		${mixins.defaultPseudo("100%", "15px")};
		background: ${props => props.bg};
	}
	${media.md`
		flex-direction: column;
		padding: 20px 15px 15px;
	`}
	
`;
const ImgWrap = styled.div`
	/* outline: 1px dashed green; */
	/* width: 100%; */
	flex: 0 0 40%;
	${media.md`
		flex: 1;
		${mixins.flexCenterContentVertically};
	`}
	& a {
		${mixins.hoverOpacity};
	}
`;
const Img = styled.img`
	${mixins.boxShadowSmall()};
	width: 100%;
	object-fit: contain;
	object-position: center bottom;
	border-radius: 2px;
	${media.md`
		display: block;
		width: 94%;
		margin: 0 auto;
	`}
`;
const Txt = styled.div`
	/* outline: 1px dashed red; */
	color: ${colors.almostBlack};
	padding-right: 10px;
	flex: 0 0 60%;
	${media.md`
		flex: 1;
		margin-bottom: 15px;
	`}
	& a {color: ${colors.almostBlack};
`;
const Title = styled.h3`
	${mixins.borderUnderline};
	margin-bottom: 15px;
`;

const Url = styled.p`
	${mixins.borderUnderline};
	font-weight: bold;
	margin-bottom: 10px;
	${media.md`
		margin: 10px 0;
		font-size: 14px;
	`}
	& a {
		color: ${colors.dustBlue};
		display: inline-block;
		&:first-child {
			margin-right: 15px;
		}
	}
`;
const Info = styled.div`
	font-size: 15px;
	color: ${colors.dustBlue};
`;

