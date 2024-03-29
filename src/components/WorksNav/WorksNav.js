import React, {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {Link, matchRoutes, useLocation} from "react-router-dom";
import {colors} from "../../style/vars-mixins/colors";
import {media} from "../../style/vars-mixins/media";
import {mixins} from "../../style/vars-mixins/mixins";

import {InlineIcon} from "@iconify/react";
import previousIcon from "@iconify/icons-flat-color-icons/previous";
import nextIcon from "@iconify/icons-flat-color-icons/next";
import signpostIcon from "@iconify/icons-openmoji/signpost";

// expects nav prop object:
// {prev: {"slug": "", "title": ""},
// 	next: {"slug": "", "title": ""}}

const WorksNav = (props) => {
	const worksList = props.worksList;
	const work = props.work;
	// Get url of parent page with all works
	const currentURL = useLocation().pathname;
	const parentUrl = currentURL.slice(0, currentURL.lastIndexOf("/"));// TODO?

	// Toggle nav links description
	const [isPrevDescrShown, setIsPrevDescrShown] = useState(false);
	const [isNextDescrShown, setIsNextDescrShown] = useState(false);

	// Get data for prev/next nav based on current work index
	const lastIndex = worksList.length - 1;
	const [navLinks, setNavLinks] = useState({prev: {}, next: {}});
	useEffect(() => {
		const populateNav = () => {
			const workIndex = worksList.indexOf(work);
			const prevIndex = (workIndex - 1) >= 0 ? workIndex - 1 : lastIndex;
			const nextIndex = (workIndex + 1) < worksList.length ? workIndex + 1 : 0;
			return {
				prev: {
					slug: worksList[prevIndex].slug,
					title: worksList[prevIndex].title,
					year: worksList[prevIndex].year
				},
				next: {
					slug: worksList[nextIndex].slug,
					title: worksList[nextIndex].title,
					year: worksList[nextIndex].year
				}
			};
		};//populateNav
		setNavLinks(n => n = populateNav());
	}, [work]);
	// end get prev/next

//TODO replace <a> with Link, debug Router

	return (
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
	);
};


const NavContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 40px;
	@media ${media.lg}{
		flex-wrap: nowrap;
		margin-bottom: 50px;
	}
`;
const NavItem = styled.div`//TODO Link or a?? Link failed, check router
	//outline: 1px dashed peachpuff;
	position: relative;
	flex: 0 1 32px;
	color: ${colors.almostWhite};
	position: relative;
	@media ${media.lg}{
		order: unset;
		width: 37%;
	}
	& svg {//icon
		font-size: 32px;
		transiton: transform .3s ease-in;
		&:hover {opacity: .9}
		& path {
			fill: ${colors.almostWhite};
		}
	}
`;
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
	@media ${media.lg}{
		top: 6px;
		font-size: 16px;
	}
	${NavItem}:first-child & {
		left: 0;
		@media ${media.lg}{
			left: 45px;
		}
	}
	${NavItem}:last-child & {
		right: 0;
		text-align: right;
		@media ${media.lg}{
			right: 45px;
		}
	}
`;
const Back = styled.div`
	//outline: 1px dashed hotpink;
	flex: 0 1 30%;
	min-width: 150px;
	font-size: 14px;
	text-align: center;
	white-space: nowrap;
	${mixins.borderUnderline}
	@media ${media.lg}{
		font-size: 15px;
	}
	& svg {
		width: 28px;
		height: 28px;
		margin-bottom: -5px;
	}
`;

export default WorksNav;
