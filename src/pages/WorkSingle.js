import React, { useState, useEffect, useRef } from "react";
import {useParams, useLocation} from "react-router-dom";
import styles from "./WorkSingle.module.scss";
import Loading from "../components/service/Loading";
import Page404 from "./Page404";
import WorksNav from "../components/WorksNav/WorksNav";
import {sitesList} from "../data/sitesList";
// import {InlineIcon} from "@iconify/react"
// import exiticon from "@iconify/icons-openmoji/exit"

const WorkSingle = (props) => {
	const currentURL = useLocation().pathname// TMP
	// const worksList = sitesList;//props.data// sitesList or uxList expected
	const {itemSlug} = useParams();
	// Get data for the current work
	const currentWork = sitesList.find(item => item.slug === itemSlug);
	const [work, setWork] = useState(w => w = currentWork);

	// Image changing tabs
	const [mainImgSrc, setMainImgSrc] = useState("");
	const [mainImgTitle, setMainImgTitle] = useState("");
	// set main image on first page load
	useEffect(() => {
		console.info(`WorkSingle: current path: ${currentURL}`)
		console.info("WorkSingle - currentWork:");
		console.info(currentWork);
		console.info("WorkSingle - itemSlug:");
		console.info(itemSlug);
		work && setMainImgSrc(work.images[0].src);
		work && setMainImgTitle(work.images[0].title);
	}, [work]);
	const replaceMainImg = (src, title) => {
		setMainImgSrc(src);
		setMainImgTitle(title);
	};
	const isCurrent = img => img === mainImgSrc;
	useEffect(() => {
		isCurrent();
	}, [mainImgSrc]);
	//end Image changing tabs

	// Load check for mainImg
	//TODO: bug: works only on img change & initial page load, but not on refresh - useEffect doesn't help
	let [imgLoaded, setImgLoaded] = useState(false);

	// reset img preloader state on tab switch
	useEffect(() => {
		setImgLoaded(false);
	}, [mainImgSrc]);

// end load check

	return (
		!work ?
		<Page404/> :
		<article className={styles.singleWork}>

			<section className={"content-width"}>
				{<WorksNav worksList={sitesList} work={work}/>}
				<h1>{work.title}</h1>
				<div className={styles.singleWork__info}>
					<p><b>{work.year}</b></p>
					{work.urls && work.urls.map(url =>
						<a className={styles.singleWork__link} key={url.url}
							href={url.url}
							target="_blank"
							rel={"noreferrer"}
						>
							<span>{url.txt}</span>
							{/*<InlineIcon icon={exiticon}/>*/}
						</a>
					)}{/*urls.map*/}
				</div>
				<div className={styles.singleWork__descr} dangerouslySetInnerHTML={{__html: work.description}}></div>
				<div className={"tabs"}>
					{work.images.map(image =>
						<p key={image.title}
							onClick={() => replaceMainImg(image.src, image.title)}
							current={isCurrent(image.src)}
							className={isCurrent(image.src) ? true : false}
						>
							<span>{image.title}</span>
						</p>
					)}{/*images.map*/}
				</div>
			</section>

			<section className={styles.singleWork__mainImgWrap + " content-wide"}>
				<Loading loaded={imgLoaded}/>
				<img
					src={mainImgSrc}
					onLoad={() => setImgLoaded(true)}
					loaded={imgLoaded}
					alt={mainImgTitle}
				/>
			</section>

			{/* <ContentWidth>
				<WorksNav worksList={sitesList} work={work}/>
			</ContentWidth> */}

		</article>
	);
};
export default WorkSingle;

