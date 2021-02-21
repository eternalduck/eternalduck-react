import React, { useState, useEffect } from "react"
// import ReactDOM from "react-dom"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import Header from "../header-footer/Header"
import ContentLimitedWidth from "../Layout/ContentLimitedWidth"
import ContentWidth from "../Layout/ContentWidth"
import {cvTxt} from "../data/cvTxt"
import {cvTxtRu} from "../data/cvTxtRu"
import {Icon, InlineIcon} from "@iconify/react"
import globeShowingAmericas from "@iconify/icons-openmoji/globe-showing-americas"

const CvPage = (props) => {
	const [data, setData] = useState(cvTxt)
	const switchLang = () => setData(lang => lang.lang === "en" ? cvTxtRu : cvTxt)
	const [isLastJobsShown, setIsLastJobsShown] = useState(false)
	return(
		<Cv>
		<ContentWidth>
			<Header>
				<LangSwitch onClick={switchLang}>
					<span>{data.lang === "en" ? "Ru" : "En"}</span>
					<IconSc icon={globeShowingAmericas}/>
				</LangSwitch>
			</Header>
		</ContentWidth>

		<ContentLimitedWidth>
			<Top>
				<h2>{data.name}</h2>
				<p>
					{data.email}<br/>
					<a href={data.gitUrl} target={"_blank"} rel={"noreferrer"}><span>Github</span></a>
					{/*<br/>{data.tg}*/}
				</p>
			</Top>

			<h1 dangerouslySetInnerHTML={{__html: data.title}}></h1>
			<h3>{data.skillsTitle}</h3>
			<List>
				{data.skillsList.map(
					(skill, i) => <li key={i} dangerouslySetInnerHTML={{__html: skill}}></li>
				)}
			</List>

			<h3>{data.softSkillsTitle}</h3>
			<List>
				{data.softSkillsList.map(
					(skill, i) => <li key={i} dangerouslySetInnerHTML={{__html: skill}}></li>
				)}
			</List>

			<h3>{data.jobsTitle}</h3>
			<JobList lastJobsShown={isLastJobsShown}>
				{data.jobsList.map(
					(job, i) =>
				<li key={i}>
					<p>
						<span className={"txt_big txt_bold"} dangerouslySetInnerHTML={{__html: job.position}}></span>
					{job.url
						? <a href={job.url}
						target={"_blank"}
						rel={"noreferrer"}>
						<span dangerouslySetInnerHTML={{__html: job.company}}></span>
						</a>
						: <span dangerouslySetInnerHTML={{__html: job.company}}></span>
					}
					</p>
					<Date dangerouslySetInnerHTML={{__html: job.date}}></Date>
					<SubList>
						{job.tasks.map(
							(task, i) =>
								<li key={i} dangerouslySetInnerHTML={{__html: task}}></li>
						)}
					</SubList>
				</li>
				)}
			</JobList>
			<ToggleLastItems onClick={() => setIsLastJobsShown(prev => !prev)}>
				&bull; <span>show {isLastJobsShown ? "less" : "more"} experience</span>
			</ToggleLastItems>

			<h3>{data.eduTitle}</h3>
			<List>
				{data.eduList.map(
					(uni, i) =>
						<li key={i} dangerouslySetInnerHTML={{__html: uni}}></li>
				)}
			</List>

			<h3>{data.coursesTitle}</h3>
			<List>
				{data.coursesList.map(
					(course, i) =>
						<li key={i} dangerouslySetInnerHTML={{__html: course}}></li>
				)}

			</List>

			<p className={"txt_small"} dangerouslySetInnerHTML={{__html: data.extra}}></p>
		</ContentLimitedWidth>
		</Cv>
	)
}

export default CvPage

const LangSwitch = styled.div`
	//outline: 1px dashed navajowhite;
	//font-size: 16px;
	text-align: right;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	user-select: none;
	${mixins.dashedUnderline};
	${media.mdDown`
		margin-right: 30px;
	`}
`
const IconSc = styled(Icon)`
	font-size: 32px;
	margin-left: 5px;
	${mixins.hoverOpacity};
`

const Cv = styled.div`
	background: ${props => props.theme.cvBg};
	color: ${props => props.theme.txtClr};
	padding-bottom: 100px;
	${mixins.biggerFont};
	& a {
		color: ${theme => theme.txtClr};
		${mixins.borderUnderline};
	}
	& h1, & h3 {
		text-align: center;
	}
	& h1 {
		 color: ${props => props.theme.name === "dark" ? colors.yellow : colors.midVio};
	}
	& h3 {
		 color: ${props => props.theme.name === "dark" ? colors.pastelYellow : colors.pinkyGray};
	}
	@media print {
		background: #fff;
		color: #000;
		& h1 {font-size: 28px;}
		& h3 {font-size: 24px;}
	}
`

const Top = styled.div`
	margin-bottom: 20px;
	p {line-height: 2;}
	${media.md`
		display: flex;
		flex-wrap: wrap;
		h2 {
			flex: 3;
		}
		p {
			flex: 1;
			text-align: right;
		}
	`}
`
const List = styled.ul`
	list-style-type: disc;
	padding-left: 15px;
	margin-bottom: 40px;
	li {
		padding-left: 5px;
		margin-bottom: 7px;
	}
`

const SubList = styled.ul`
	list-style-type: none;
	margin: 10px 0 35px;
	li {
		text-indent: -10px;
		margin-bottom: 12px;
		&:before {
			content: "- ";
		}
	}
`
const Date = styled.span`
	color: ${props => props.theme.name === "dark" ? colors.litestGray : colors.midGray};
`
//hide several bottom job entries
const JobList = styled(List)`
	& > li:nth-last-child(-n+3) {
		transition: opacity .2s ease-in;
		${props => props.lastJobsShown
			? `display: block; opacity: 1;`
			: `display: none; opacity: 0;`}
	}
	@media print {
		& > li:nth-last-child(-n+3) {display: block;}
	}
`
const ToggleLastItems = styled.p`
	color: ${props => props.theme.name === "dark" ? colors.pastelPink : colors.midVio};
	//color: ${props => props.theme.name === "dark" ? colors.transpPastelPink : colors.transpPastelBlue};
	font-size: 20px;
	font-weight: bold;
	margin-top: -25px;
	cursor: pointer;
	${mixins.dashedUnderline};
`
