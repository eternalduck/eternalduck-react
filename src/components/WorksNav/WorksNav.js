import React, {useState, useEffect} from "react";
import styles from "./WorksNav.modules.scss";
import {Link, matchRoutes, useLocation} from "react-router-dom";
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
		<nav className={styles.worksNav}>
			<div className={styles.worksNav__item}
				onMouseEnter={() => setIsPrevDescrShown(true)}
				onMouseLeave={() => setIsPrevDescrShown(false)}>
			{navLinks.prev.slug &&
				<>
				{/* TODO Link or a?? Link failed, check router */}
				<a href={`${navLinks.prev.slug}`}>
					<InlineIcon icon={previousIcon}/>
					<span className={styles.worksNav__descr} shown={isPrevDescrShown}>
						{navLinks.prev.title} ({navLinks.prev.year})
					</span>
				</a>
				</>
			}
			</div>
			<div className={styles.worksNav__back}>
				<Link to={parentUrl}>
					<InlineIcon icon={signpostIcon}/>
					<span>back to the list</span>
				</Link>
			</div>
			<div className={styles.worksNav__item}
				onMouseEnter={() => setIsNextDescrShown(true)}
				onMouseLeave={() => setIsNextDescrShown(false)}>
			{navLinks.next.slug &&
				<>
				<a href={`${navLinks.next.slug}`}>
					<InlineIcon icon={nextIcon}/>
					<span className={styles.worksNav__descr} shown={isNextDescrShown}>
						{navLinks.next.title} ({navLinks.next.year})
					</span>
				</a>
				</>
			}
			</div>
		</nav>
	);
};




export default WorksNav;
