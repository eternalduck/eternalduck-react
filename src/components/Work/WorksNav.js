import React, {useState, useEffect} from "react"
import styled, {keyframes} from "styled-components"
import {Link, useRouteMatch} from "react-router-dom"
import {colors, mixins, media} from "../../style/vars-mixins/_index"
import ContentWidth from "../Layout/ContentWidth"
import {InlineIcon} from "@iconify/react"
import previousIcon from "@iconify/icons-flat-color-icons/previous"
import nextIcon from "@iconify/icons-flat-color-icons/next"
import signpostIcon from "@iconify/icons-openmoji/signpost"

// expects nav prop object:
// {prev: {"slug": "", "title": ""},
// 	next: {"slug": "", "title": ""}}

const WorksNav = (props) => {
	const worksList = props.worksList
	const work = props.work
// Get data for prev/next nav based on current work index
	const lastIndex = worksList.length - 1
	const [navLinks, setNavLinks] = useState({prev: {slug: "", title: ""}, next: {slug: "", title: ""}})
	useEffect(() => {
		const populateNav = () => {
			const workIndex = worksList.indexOf(work)
			const prevIndex = (workIndex - 1) >= 0 ? workIndex - 1 : lastIndex
			const nextIndex = (workIndex + 1) < worksList.length ? workIndex + 1 : 0
			const prevSlug = worksList[prevIndex].slug
			const prevTitle = worksList[prevIndex].title
			const nextSlug = worksList[nextIndex].slug
			const nextTitle = worksList[nextIndex].title
			return {
				prev: {slug: prevSlug, title: prevTitle},
				next: {slug: nextSlug, title: nextTitle},
			}
		}//populateNav

		setNavLinks(n => n = populateNav())
	}, [work])
	// end get prev/next
	return (
		<ContentWidth>
			<NavContainer>
				{/*TODO pass url to parent page*/}
				<Back href={"#"} bottom={props.bottom}>
					<InlineIcon icon={signpostIcon}/>
					<span>back to all works</span>
				</Back>

				<BackNextContainer bottom={props.bottom}>
					<Item>
					{navLinks.prev.slug &&
						<a href={`${navLinks.prev.slug}`}>
							<IconSc icon={previousIcon}/>
							<span>{navLinks.prev.title}</span>
						</a>
					}
					</Item>
					<Item>
					{navLinks.next.slug &&
						<a href={`${navLinks.next.slug}`}>
							<span>{navLinks.next.title}</span>
							<IconSc icon={nextIcon}/>
						</a>
					}
					</Item>
				</BackNextContainer>
			</NavContainer>
		</ContentWidth>
	)
}

const NavContainer = styled.div`
	//outline: 1px dashed red;
	display: flex;
	flex-direction: column;
	padding: 15px 0;
`
const Back = styled.a`//TODO make between prev/nav on desk
	//outline: 1px dashed hotpink;
	display: block;
	margin-bottom: 40px;
	text-align: center;
	${mixins.borderUnderline}
	order: ${props => props.bottom ? "2" : "1"};
	${media.md`
		margin-bottom: 50px;
	`}
	& svg {
		width: 28px;
		height: 28px;
	}
`
const BackNextContainer = styled.div`
	order: ${props => props.bottom ? "1" : "2"};
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
	${media.md`
		margin-bottom: 50px;
	`}
`
const Item = styled.div`//TODO Link or a?? Link failed, check router
	//outline: 1px dashed;
	display: block;
	width: 45%;
	padding-left: 25px;
	color: ${colors.almostWhite};
	font-size: 15px;
	position: relative;
	${mixins.borderUnderline}
	${media.md`
		font-size: 18px;
	`}
	&:last-child {
		text-align: right;
		padding-right: 25px;
		padding-left: 0;
	}
`
const IconSc = styled(InlineIcon)`
	//outline: 1px dashed red;
	font-size: 24px;
	position: absolute;
	left: 0;
	top: 3px;
	transiton: transform .3s ease-in;
	&:hover {opacity: .9}
	${Item}:last-child & {
		right: 0;
		left: auto;
	}
	& path {
		fill: ${colors.almostWhite};
	}
`

export default WorksNav
