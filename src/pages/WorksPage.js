import React, {useState, useEffect, useCallback} from "react";
import {Link, matchRoutes, useLocation, Outlet} from "react-router-dom";
import styled, {css, createGlobalStyle } from "styled-components";
import {colors, mixins, media} from "../style/vars-mixins/_index";
import ContentWidth from "../components/Layout/ContentWidth";
import WorkItem from "../components/Work/WorkItem";
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
		<Works>{/*  theme={props.theme} */}
			<ContentWidth>
				<WorksWrap>
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
				</WorksWrap>
			</ContentWidth>
		</Works>
	);
};//WorksPage

const Works = styled.div`
	background: ${props => props.theme.bodyBg} url("/images/circle.png") right bottom no-repeat;
`;
const WorksWrap = styled.div`
	margin-top: 50px;
	padding-bottom: 100px;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	${media.md`
		justify-content: flex-start;
		/* column-gap: 50px; */
	`}
`;

export default WorksPage;
