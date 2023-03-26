import React, {useState, useEffect, useCallback} from "react";
import {Link, matchRoutes, useLocation} from "react-router-dom";
import styles from "./WorkItem.module.scss";
import {Icon, InlineIcon} from "@iconify/react";
import exiticon from "@iconify/icons-openmoji/exit";

const WorkItem = (props) => {
	let currentURL = useLocation().pathname;

	return (
		<article className={styles.workItem}>
			<div className={styles.workItem__inner + " INNER"} bg={props.bg}>
				<div className={styles.workItem__text}>
					<div className={styles.workItem__title}>
						<Link to={`${currentURL}/${props.item.slug}`}>
							<span>{props.item.title}</span>
						</Link>
					</div>
					<>
					{props.item.urls &&
					// Show only one url for brevity
						<p className={styles.workItem__links}>
							<a href={props.item.urls[0].url} target={"_blank"} rel={"noreferrer"}>
								<span>{props.item.urls[0].txt}</span>
							</a>
						</p>
					}
						<div className={styles.workItem__info}>
							<p><b>{props.item.year}</b></p>
							<p>{props.item.keywords}</p>
						</div>
					</>
				{/* <Descr dangerouslySetInnerHTML={{__html: props.item.description}}/> */}
				</div>
				<div className={styles.workItem__imgWrap}>
					<Link to={`${currentURL}/${props.item.slug}`}>
						<img src={props.item.thumb} alt={props.item.title}/>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default WorkItem;
