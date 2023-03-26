import React, {useState, useEffect, useCallback} from "react";
import {Link, matchRoutes, useLocation, Outlet} from "react-router-dom";
import styles from "./WorksPage.module.scss";
import WorkItem from "../components/WorkItem/WorkItem";
import {generateRandomBg} from "../components/helpers/generateRandomBg";
import {sitesList} from "../data/sitesList";

const WorksPage = (props) => {
	const currentURL = useLocation().pathname;
	const worksList = sitesList;//props.data// sitesList or uxList expected, TODO add check
	const [bg, setBg] = useState("#333");

	useEffect(() => {
		console.info(`WorksPage: current path: ${currentURL}`);
		setBg(prev => generateRandomBg(worksList.length));
	}, []);


	return (
		<section className={styles.worksPage}>{/*  theme={props.theme} */}
			<div className={styles.worksPage__inner + " content-width no-padding"}>
				{worksList && worksList.map((item, i) =>

					// <p key={item.slug}>
					// 	<Link to={`${currentURL}/${item.slug}`}>
					// 		<span>{item.title}</span>
					// 	</Link>
					// </p>

					<WorkItem key={item.slug}
						item={item}
						bg={bg[i]}
					/>
				)}
			</div>
		</section>
	);
};

export default WorksPage;
