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
	// Get url of parent page with all works
	let {url} = useRouteMatch()
	const parentUrl = url.slice(0, url.lastIndexOf("/"))

	// Toggle nav links description
	const [isPrevDescrShown, setIsPrevDescrShown] = useState(false)
	const [isNextDescrShown, setIsNextDescrShown] = useState(false)

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
			const prevYear = worksList[prevIndex].year
			const nextSlug = worksList[nextIndex].slug
			const nextTitle = worksList[nextIndex].title
			const nextYear = worksList[nextIndex].year
			return {
				prev: {slug: prevSlug, title: prevTitle, year: prevYear},
				next: {slug: nextSlug, title: nextTitle, year: nextYear},
			}
		}//populateNav
		setNavLinks(n => n = populateNav())
	}, [work])
	// end get prev/next

//TODO replace <a> with Link, debug Router

	return (
		<ContentWidth>
			<NavContainer>
				<NavItem
					onMouseEnter={() => setIsPrevDescrShown(true)}
					onMouseLeave={() => setIsPrevDescrShown(false)}>
				{navLinks.prev.slug &&
					<>
					<a href={`${navLinks.prev.slug}`}>
						<InlineIcon icon={previousIcon}/>
					</a>
					<Descr shown={isPrevDescrShown}>
						{navLinks.prev.title} ({navLinks.prev.year})
					</Descr>
					</>
				}
				</NavItem>
				<Back>
					<Link to={parentUrl}>
						<InlineIcon icon={signpostIcon}/>
						<span>back to the list</span>
					</Link>
				</Back>
				<NavItem
					onMouseEnter={() => setIsNextDescrShown(true)}
					onMouseLeave={() => setIsNextDescrShown(false)}>
				{navLinks.next.slug &&
					<>
					<a href={`${navLinks.next.slug}`}>
						<InlineIcon icon={nextIcon}/>
					</a>
					<Descr shown={isNextDescrShown}>
						{navLinks.next.title} ({navLinks.next.year})
					</Descr>
					</>
				}
				</NavItem>
			</NavContainer>
		</ContentWidth>
	)
}


const NavContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 40px;
	${media.lg`
		flex-wrap: nowrap;
		margin-bottom: 50px;
	`}
`
const NavItem = styled.div`//TODO Link or a?? Link failed, check router
	//outline: 1px dashed peachpuff;
	position: relative;
	flex: 0 1 32px;
	color: ${colors.almostWhite};
	position: relative;
	${media.lg`
		order: unset;
		width: 37%;
	`}
	& svg {//icon
		font-size: 32px;
		transiton: transform .3s ease-in;
		&:hover {opacity: .9}
		& path {
			fill: ${colors.almostWhite};
		}
	}
`
const Descr = styled.div`
	//outline: 1px dashed hotpink;
	visibility: ${props => props.shown ? "visibile" : "hidden"};
	opacity: ${props => props.shown ? "1" : "0"};
	transition: opacity .2s ease-in;
	position: absolute;
	top: -40px;
	width: 300px;
	font-size: 15px;
	user-select: none;
	${mixins.borderUnderline}
	${media.lg`
		top: 6px;
		font-size: 16px;
	`}
	${NavItem}:first-child & {
		left: 0;
		${media.lg`
			left: 45px;
		`}
	}
	${NavItem}:last-child & {
		right: 0;
		text-align: right;
		${media.lg`
			right: 45px;
		`}
	}
`
const Back = styled.div`
	//outline: 1px dashed hotpink;
	flex: 0 1 30%;
	min-width: 150px;
	font-size: 14px;
	text-align: center;
	white-space: nowrap;
	${mixins.borderUnderline}
	${media.lg`
		font-size: 15px;
	`}
	& svg {
		width: 28px;
		height: 28px;
		margin-bottom: -5px;
	}
`

export default WorksNav
