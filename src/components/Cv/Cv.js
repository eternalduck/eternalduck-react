import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'
import ContentWidth from '../Layout/ContentWidth'

const Cv = (props) => {
	useEffect(() => {
		// document.body.className = cssC.cvPage
	})
//TODO move all content to data/cv.js
	return(
		<ContentWidth>
			{/* <div className="lang__container lang__container_cv">
				@@include("../../modules/lang-toggle/ru-toggle.html", {
					"toggleClass": "lang__toggle_cv expand"
				})
				<div className="lang__content lang__content_cv">
					@@include("cv-ru.html")
				</div>
				@@include("../../modules/lang-toggle/ru-toggle.html", {
					"toggleClass": "lang__toggle_cv lang__toggle_bottom scrtop expand"
				})
			</div> */}


			<div className="cv-page__content cv-page">
				<div className="cv-page__header">
					<p className="cv-page__name">[name hidden]</p>
					<p>eternalduckie@gmail.com</p>
				</div>
				<h1>HTML Developer<br/>Front-end Developer</h1>
				<h3>Professional Skills</h3>
				<ul className="cv-page__list">
					<li>Extensive knowledge of HTML/CSS: clean and&nbsp;valid code, transforming web designers' prototypes into valid cross-browser interactive pages and SPA;</li>
					<li>good command of JS; basic knowledge of PHP, SQL;</li>
					<li>setting up projects based on Gulp and Webpack, working with various node modules and interface libraries;</li>
					<li>basic skills of React development;</li>
					<li>good knowledge of Wordpress and its plugins and&nbsp;themes; also worked with Moodle and&nbsp;Joomla;</li>
					<li>working with various site constructors such as Tilda, Squarespace, Weblium, Wix;</li>
					<li>proficient Figma and Photoshop user;</li>
					<li>knowledge of UI/UX design principles;</li>
					<li>conducting UX surveys, building flow-charts, composing user stories and customer journeys, developing wireframes and high-fidelity prototypes;</li>
					<li>good color taste and feel for fine typography and composition;</li>
					<li>knowledge of some web marketing and sales principles;</li>
					<li>working with Git;</li>
					<li>domain registration and hosting; understanding web services operation principles;</li>
					<li>setting up and configuring Windows and applications, troubleshooting;</li>
					<li>advanced English; basic German and Dutch</li>
				</ul>
				<h3>Professional Experience</h3>
				<ul className="cv-page__list">
					<li><span className="cv-page__wrkplc">Frontend Developer &amp; UI/UX Designer:<br/><span className="cv-page__empl"><a href="https://propellers.pro" target="_blank" rel="noreferrer">Propellers</a> Animation Studio</span>
						<span className="cv-page__date">(April, 2019 &mdash; December, 2020, remote)</span></span>
						<ul className="cv-page__plain-list">
							<li>interviewing users and composing flow charts and&nbsp;user stories for&nbsp;a&nbsp;new internal product;</li>
							<li>drawing interactive prototypes in&nbsp;Figma;</li>
							<li>setting&nbsp;up React project and developing interfaces based on Kendo&nbsp;UI library</li>
							<li>creating landing pages for marketing;</li>
							<li>maintaining a learning course on Moodle.</li>
						</ul>
					</li>
					<li><span className="cv-page__wrkplc">Freelance Web Developer <span className="cv-page__date">(January, 2015  &mdash; February, 2019)</span></span>
						<ul className="cv-page__plain-list">
							<li>working with different clients, participation in&nbsp;medium-scale projects;</li>
							<li>making small sites from the idea to&nbsp;implementation.</li>
						</ul>
					</li>
					<li><span className="cv-page__wrkplc">Web Developer and Massmailing Assistant:<br/><span className="cv-page__empl"><a href="https://sdventures.com" target="_blank" rel="noreferrer">Social Discovery Ventures</a></span> <span className="cv-page__date">(November, 2011 &mdash; August, 2014; Moscow)</span></span>
						<ul className="cv-page__plain-list">
							<li>developing HTML pages by PSD designs;</li>
							<li>developing marketing email templates;</li>
							<li>existing projects support;</li>
							<li>content management;</li>
							<li>other issues concerning web-design;</li>
							<li>marketing massmailing, reporting and data analysis, research of user behavior to improve mail design and delivery to inbox.</li>
						</ul>
					</li>
					<li><span className="cv-page__wrkplc">HTML Developer:<br/><span className="cv-page__empl"><a href="https://www.ronikon.ru" target="_blank" rel="noreferrer">Ronikon</a> Furniture Factory</span> <span className="cv-page__date">(August, 2009 &mdash; June, 2010; Moscow)</span></span>
						<ul className="cv-page__plain-list">
							<li>developing HTML pages by PSD designs;</li>
							<li>troubleshooting, optimization and support of the existing site;</li>
							<li>content-management.</li>
						</ul>
					</li>
					<li><span className="cv-page__wrkplc">IT Helpdesk Specialist:<br/><span className="cv-page__empl"><a href="https://www.pwc.com" target="_blank" rel="noreferrer">PriceWaterhouseCoopers</a></span> <span className="cv-page__date">(February, 2008 &mdash; June, 2009; Moscow)</span></span>
						<ul className="cv-page__plain-list">
							<li>internal clients support;</li>
							<li>answering calls, identifying problems;</li>
							<li>resolving current issues on MS Windows, Lotus Notes, MS Office; LAN, Wi-Fi;</li>
							<li>operating system troubleshooting and reinstallation;</li>
							<li>hardware troubleshooting.</li>
						</ul>
					</li>
					<li><span className="cv-page__wrkplc">English Translator:<br/><span className="cv-page__empl">Polyglot &amp; TransLit Translation Agencies</span> <span className="cv-page__date">(June, 2006 &mdash; May, 2011)</span></span>
						<ul className="cv-page__plain-list">
							<li>written translation of documents (various general and technical topics);</li>
							<li>editing translations and texts;</li>
							<li>interpreting</li>
						</ul>
					</li>
					<li><span className="cv-page__wrkplc">English Teacher:<br/><span className="cv-page__empl">Secondary School #75</span> <span className="cv-page__date">(September, 2004 &mdash; June, 2005; Vladivostok)</span></span>
						<ul className="cv-page__plain-list">
							<li>giving English lessons;</li>
							<li>building up the curriculum.</li>
						</ul>
					</li>
					<li><span className="cv-page__wrkplc">Junior English Translator:<br/><span className="cv-page__empl">Hydrotex Research Institute</span> <span className="cv-page__date">(January, 2003 &mdash; September, 2005; Vladivostok)</span></span>
						<ul className="cv-page__plain-list">
							<li>translation of technical documentation on hydraulic engineering and construction and business letters;</li>
							<li>helping senior translator with their everyday routine.</li>
						</ul>
					</li>
				</ul>

				<h3>Education</h3>
				<ul className="cv-page__list">
					<li>Linguist Interpreter of English and German, Far Eastern National Technical University (2001 &mdash; 2006; Vladivostok);</li>
					<li>Computer Systems and Networks Engineer, Far Eastern National Technical University (2004 &mdash; 2007; Vladivostok).</li>
				</ul>
				<h3>Courses</h3>
				<ul className="cv-page__list">
					<li><a href="https://www.facebook.com/moscoding/videos/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-uiux-%D1%81-%D1%81%D0%B0%D1%88%D0%B5%D0%B9-%D0%B5%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-%D0%B8-%D0%BB%D0%B5%D0%BD%D0%BE%D0%B9-%D0%BB%D0%B8%D1%81%D0%B5%D0%B5%D0%B2%D0%BE%D0%B9-ramblerco/1239093149568401/" target="_blank" rel="noreferrer">Basics of a Modern UI/UX Design</a> by Rambler, Moscow Coding School (April, 2019, offline course);</li>
				</ul>
				<p className="cv-page__extra">
				I live in Kaliningrad.<br/>
				I was born in 1984.
				</p>
			</div>{/* en */}
		</ContentWidth>
	)
}

export default Cv

////@import "../../scss/vars-mixins/_index";
//
//.cvPage {
//	background: $white;
//	color: $almostBlack;
//	&__content {
//		@include breakUp("xl") {
//			max-width: 800px;
//			outline: 1px solid red;
//		}
//	}
//	& a {
//		color: $almostBlack;
//	}
//	& h1, & h2, & h3 {
//		text-align: center;
//	}
//	& p {
//		margin: 20px 0;
//	}
//	&__header {
//		& p {
//			margin: 10px 0;
//		}
//	}
//	&__name {
//		font-size: 140%;
//		font-weight: 400;
//	}
//	&__list {
//		list-style-type: disc;
//		padding-left: 15px;
//		margin-bottom: 40px;
//		& li {
//			padding-left: 5px;
//			margin-bottom: 7px;
//		}
//	}
//	&__plain-list {
//		list-style-type: none;
//		margin: 10px 0 50px;
//		& li {
//			text-indent: -10px;
//			margin-bottom: 12px;
//			&:before {
//				content: "- ";
//			}
//		}
//	}
//	&__wrkplc {
//		font-size: 19px;
//		color: $black;
//	}
//	&__empl {
//		font-size: 17px;
//	}
//	&__date {
//		color: $grayMid;
//		font-size: 15px;
//	}
//	&__extra {
//		padding-left: 20px;
//		font-style: italic;
//	}
//	& footer {
//		background: $almostWhite;
//	}
//	@include print {
//		font-size: 12px;
//		line-height: 1.2;
//		.work-page_cv__wrkplc,
//		.work-page_cv__empl,
//		.work-page_cv__date {
//			font-size: 14px;
//		}
//		.work-page_cv__date {
//			color: $gray;
//			font-size: 11px;
//		}
//		.lang__container {
//			border-bottom: none;
//			padding-top: 0;
//		}
//		.work-page_cv__content {
//			margin-top: 10px;
//		}
//		& header, & footer,
//		& .lang__toggle {
//			display: none;
//		}
//	}//print
//}//cv-page
