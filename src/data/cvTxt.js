import React, { useState, useEffect } from "react"
import {InlineIcon} from "@iconify/react"
import mobileMessage from "@iconify/icons-openmoji/mobile-message"
import wireframesIcon from "@iconify/icons-openmoji/wireframes"
import hotBeverage from "@iconify/icons-openmoji/hot-beverage"
import tabletIcon from "@iconify/icons-openmoji/tablet"
import codeEditor from "@iconify/icons-openmoji/code-editor"
import ledIcon from "@iconify/icons-openmoji/led"
import composeIcon from "@iconify/icons-openmoji/compose"
import greenBook from "@iconify/icons-openmoji/green-book"
import pencilIcon from "@iconify/icons-openmoji/pencil"

export const cvTxt = {
	"lang": "en",
	"showMore": "show more experience",
	"showLess": "show less",
	"name": "Name Surname",
	"email": "eternalduckie@gmail.com",
	// "tg": "telegram: @eternalduck",
	"gitUrl": "https://github.com/eternalduck?tab=repositories",
	"title": `UI Developer<br/>Junior Front-end Developer (React)`,
	"skillsTitle": "Skills",
	"skillsList": [
		"Extensive knowledge of HTML/CSS: clean, valid and well-commented code, I turn designers' prototypes into valid cross-browser interactive pages;",
		"middle knowledge of JS &mdash; now I have a high priority of learning it;",
		"setting up projects based on Gulp and Webpack, working with various node modules and interface libraries;",
		"basic skills of React &amp; Next.js development &mdash; I'm working further on it;",
		"basic knowledge of PHP;",
		"good knowledge of Wordpress and its plugins and themes; also worked with Moodle and Joomla;",
		"site building with constructors such as Tilda, Squarespace, Weblium, Wix;",
		"working with Git;",
		"proficient Figma and Photoshop user;",
		"knowledge of UI/UX design principles;",
		"some experience in drawing sites &amp; apps prototypes;",
		"conducting UX surveys, composing user stories and customer journeys;",
		"good color taste and feel for fine typography and composition;",
		"knowledge of basic web marketing and sales principles;",
		"domain registration and hosting; understanding web services operation principles;",
		"setting up and configuring Windows and applications, troubleshooting.",
	],
	"softSkillsTitle": "Soft Skills",
	"softSkillsList": [
		"advanced English, basic German and Dutch;",
		"I like working in a team, and I'm easy-going;",
		"I have a solid experience of working remotely, well-equipped workplace, and I know how to plan my time.",
	],
	"jobsTitle": "Job Experience",
	"jobsList": [
		{
			"icon": <InlineIcon icon={mobileMessage} />,
			"position": "Freelance Frontend Developer",
			"company": "",
			"url": "",
			"date": "(since January, 2021, remote)",
			"tasks": [
				"building pure layouts for specific tasks using Gulp or Webpack;",
				"writing small modules &amp; styling for React projects;",
				"Wordpress sites with custom designs &amp; themes from scratch;",
				"Tilda sites with a bunch of custom JS scripts.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={wireframesIcon} />,
			"position": "Frontend Developer &amp; UI/UX Designer at ",
			"company": "Propellers Animation Studio",
			"url": "https://propellers.pro",
			"date": "(April, 2019 &ndash; December, 2020, remote)",
			"tasks": [
				"setting&nbsp;up React project and developing interfaces based on Kendo&nbsp;UI library",
				"drawing interactive prototypes in&nbsp;Figma;",
				"interviewing users and composing flow charts and&nbsp;user stories for&nbsp;a&nbsp;new internal product;",
				"creating landing pages;",
				"Google Analytics &amp; GTM setup;",
				"existing web projects support.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={hotBeverage} />,
			"position": "Freelance Web Developer",
			"company": "",
			"url": "",
			"date": "(January, 2015 &ndash; February, 2019)",
			"tasks": [
				"working with different clients, participation in&nbsp;large &amp; medium-scale projects;",
				"making small sites from the idea to&nbsp;implementation.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={tabletIcon} />,
			"position": "Web Developer and Massmailing Assistant at ",
			"company": "Social Discovery Ventures",
			"url": "https://sdventures.com",
			"date": "(November, 2011 &ndash; August, 2014; Moscow)",
			"tasks": [
				"developing HTML pages by PSD designs;",
				"developing marketing email templates;",
				"existing projects support &amp; content management;",
				"setting up massmailing, reporting and data analysis, research of user behavior to improve mail design and delivery to inbox.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={codeEditor} />,
			"position": "HTML Developer at ",
			"company": "Ronikon Furniture Factory",
			"url": "https://www.ronikon.ru",
			"date": "(August, 2009 &ndash; June, 2010; Moscow)",
			"tasks": [
				"developing HTML pages by PSD designs;",
				"troubleshooting, optimization and support of the existing site;",
				"content-management.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={ledIcon} />,
			"position": "IT Helpdesk Specialist at ",
			"company": "PriceWaterhouseCoopers",
			"url": "https://www.pwc.com",
			"date": "(February, 2008 &ndash; June, 2009; Moscow)",
			"tasks": [
				"internal clients support;",
				"answering calls, identifying problems;",
				"resolving current issues on Windows, Lotus Notes, MS Office; networking;",
				"operating system &amp; hardware troubleshooting.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={composeIcon} />,
			"position": "English Translator at ",
			"company": "Polyglot &amp; TransLit Translation Agencies",
			"url": "",
			"date": "(June, 2006 &ndash; May, 2009)",
			"tasks": [
				"written translation of documents on various general and technical topics;",
				"translations and texts editing;",
				"interpreting.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={greenBook} />,
			"position": "English Teacher at ",
			"company": "Secondary School #75",
			"url": "",
			"date": "(September, 2004 &ndash; June, 2005; Vladivostok)",
			"tasks": [
				"teaching English lessons;",
				"developing education program for each class individually.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={pencilIcon} />,
			"position": "English Translator at ",
			"company": "Hydrotex Research Institute",
			"url": "",
			"date": "(January, 2003 &ndash; September, 2005; Vladivostok)",
			"tasks": [
				"translation of technical documentation on hydraulic engineering and construction, and business letters;",
				"helping senior translator with their everyday routine.",
			],
		},
	],
	"eduTitle": "Education",
	"eduList": [
		"Linguist Interpreter of English and German, Far Eastern National Technical University (now FEFU): 2001 &mdash; 2006 (Vladivostok)",
		"Computer Systems and Networks Engineer, Far Eastern National Technical University  (now FEFU): 2004 &mdash; 2007 (Vladivostok)",
	],
	"coursesTitle": "Courses",
	"coursesList": [
		`<a href="https://www.facebook.com/moscoding/videos/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-uiux-%D1%81-%D1%81%D0%B0%D1%88%D0%B5%D0%B9-%D0%B5%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-%D0%B8-%D0%BB%D0%B5%D0%BD%D0%BE%D0%B9-%D0%BB%D0%B8%D1%81%D0%B5%D0%B5%D0%B2%D0%BE%D0%B9-ramblerco/1239093149568401/" target="_blank">Basics of a Modern UI/UX Design</a> by Rambler, Moscow Coding School (April, 2019, offline course);`
	],
	"extra": "I live in Kaliningrad;<br/>I was born in 1984.",
}//cvTxt


export const cvTxtRu = {
	"lang": "ru",
	"showMore": "показать ещё",
	"showLess": "свернуть",
	"name": "Name Surname",
	"email": "eternalduckie@gmail.com",
	// "tg": "telegram: @eternalduck",
	"gitUrl": "https://github.com/eternalduck?tab=repositories",
	"title": `Начинающий Frontend-разработчик (React),<br/>HTML-верстальщик`,
	"skillsTitle": "Профессиональные навыки",
	"skillsList": [
		"создаю сайты, пишу стройный и валидный код, люблю адаптивную кроссбраузерную вёрстку;",
		"пишу JS на среднем уровне &mdash; сейчас в приоритете совершенствоваться в этом;",
		"знаю, как настраивать проекты на Gulp и Webpack, работаю с различными модулями node.js и UI-библиотеками;",
		"есть базовые знания React &amp; Next.js &mdash; хочу развиваться в этом направлении;",
		"работаю с Git;",
		"есть базовые знания PHP;",
		"хорошо знаю WordPress, его плагины и темы, также работала с Moodle и Joomla;",
		"знакома с различными конструкторами сайтов, такими как Tilda, Squarespace, Weblium, Wix;",
		"владею Figma и Photoshop;",
		"есть опыт проведения UX-исследований, построения блок-схем, описания user stories и customer journeys, создания wireframes и интерактивных прототипов;",
		"обладаю чувством стиля, ценю хорошую типографику и композицию;",
		"понимаю некоторые принципы веб-маркетинга и продаж;",
		"знаю, как работает регистрация доменов, размещение сайтов на хостинге;",
		"есть опыт сборки оборудования, установки/настройка Windows и т. д.;",
		"свободный английский, базовые немецкий и нидерландский;",
		"умею работать в команде, легко нахожу общий язык;",
		"есть опыт работы на удалёнке, могу планировать время и соблюдать баланс.",
	],
	"softSkillsTitle": "",
	"softSkillsList": [],
	"jobsTitle": "Опыт работы",
	"jobsList": [
		{
			"icon": <InlineIcon icon={mobileMessage} />,
			"position": "Frontend-разработчик (freelance)",
			"date": "(с января 2021, удалёнка)",
			"company": "",
			"url": "",
			"tasks": [
				"чистая вёрстка со сборкой на Gulp или Webpack под узкие задачи клиента;",
				"разработка небольших модулей и стилей для готовых проектов на React;",
				"разработка сайтов на Wordpress с нестандартным дизайном и темами с нуля;",
				"сайты на Tilda и написание кастомных JS-скритов под них.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={wireframesIcon} />,
			"position": "Frontend-разработчик и UI/UX-дизайнер: ",
			"date": "(апрель 2019 &ndash; декабрь 2020, удалёнка)",
			"company": "Propellers Animation Studio",
			"url": "https://propellers.pro",
			"tasks": [
				"участие в разработке проекта на React с setting&nbsp;up React project Kendo UI library;",
				"создание интерактивных прототипов в Figma;",
				"проведение интервью с пользователями, составление схем и user stories для нового внутреннего продукта;",
				"создание и поддержка сайтов на Wordpress и остальных проектов;",
				"настройка Google Analytics и GTM."
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={hotBeverage} />,
			"position": "Веб-разработчик (freelance): ",
			"date": "(январь 2015 &ndash; февраль 2019)",
			"company": "",
			"url": "",
			"tasks": [
				"работа с различными клиентами, участие в больших проектах;",
				"создание небольших сайтов с нуля."
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={tabletIcon} />,
			"position": "Веб-разработчик и ассистент по email-рассылкам: ",
			"date": "(ноябрь 2011 &ndash; август 2014, Москва)",
			"company": "Social Discovery Ventures",
			"url": "https://sdventures.com",
			"tasks": [
				"вёрстка страниц по psd-макетам;",
				"вёрстка сайтов на чистом HTML & полностью под Wordpress;",
				"вёрстка email-шаблонов;",
				"внесение изменений в существующие сайты;",
				"публикация различного контента;",
				"решение текущих вопросов по вёрстке;",
				"проведение маркетинговых рассылок, составление отчётов и анализ данных, исследование поведения пользователей с целью улучшения дизайна писем и их доставляемости.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={codeEditor} />,
			"position": "HTML-верстальщик: ",
			"date": "(август 2009 &ndash; июнь 2010, Москва)",
			"company": "Ronikon Furniture Factory",
			"url": "https://www.ronikon.ru",
			"tasks": [
				"вёрстка страниц по psd-макетам;",
				"исправление в коде работающего сайта;",
				"наполнение контентом;",
				"решение текущих вопросов по вёрстке.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={ledIcon} />,
			"position": "Специалист технической поддержки: ",
			"date": "(февраль 2008 &ndash; июнь 2009, Москва)",
			"company": "PriceWaterhouseCoopers",
			"url": "https://www.pwc.com",
			"tasks": [
				"поддержка внутренних пользователей по телефону и удалённо;",
				"настройка специализированных программ компании;",
				"настройка сетевых принтеров и сканеров;",
				"настройка WiFi & bluetooth;",
				"настройка и поддержка LotusNotes, MS Office и других приложений;",
				"решение проблем с Windows;",
				"диагностика и сборка оборудования.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={composeIcon} />,
			"position": "Переводчик: ",
			"date": "(июнь 2006 &ndash; май 2009)",
			"company": "Polyglot &amp; TransLit Translation Agencies",
			"url": "",
			"tasks": [
				"письменный перевод и редактирование документов различной тематики;",
				"устный перевод.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={greenBook} />,
			"position": "Преподаватель английского языка старших классов: ",
			"date": "(сентябрь 2004 &ndash; июнь 2005, Владивосток)",
			"company": "Secondary School #75",
			"url": "",
			"tasks": [
				"проведение уроков;",
				"ведение журнала, составление учебного плана.",
			],
		},
//////////////////////////
		{
			"icon": <InlineIcon icon={pencilIcon} />,
			"position": "Переводчик: ",
			"date": "(сентябрь 2004 &ndash; июнь 2005, Владивосток)",
			"company": "Hydrotex Research Institute",
			"url": "",
			"tasks": [
				"письменный перевод технических проектов по строительству гидротехнических сооружений, проектам Сахалин I и II, перевод деловой переписки;",
				"редактирование текстов;",
				"помощь старшему переводчику в решении текущих вопросов.",
			],
		},
	],
	"eduTitle": "Образование",
	"eduList": [
		"Инженер-системотехник: Дальневосточный государственный технический университет имени В. В. Куйбышева, факультет информатики и компьютерной техники (2004 &mdash; 2007, Владивосток)",
		"Лингвист-переводчик: Дальневосточный государственный технический университет имени В. В. Куйбышева, факультет западноевропейских языков (2001 &mdash; 2006, Владивосток)",
	],
	"coursesTitle": "Курсы",
	"coursesList": [
		`<a href="https://www.facebook.com/moscoding/videos/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-uiux-%D1%81-%D1%81%D0%B0%D1%88%D0%B5%D0%B9-%D0%B5%D1%80%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-%D0%B8-%D0%BB%D0%B5%D0%BD%D0%BE%D0%B9-%D0%BB%D0%B8%D1%81%D0%B5%D0%B5%D0%B2%D0%BE%D0%B9-ramblerco/1239093149568401/" target="_blank">Основы современного UI/UX</a> от Rambler, Moscow Coding School (апрель 2019, очный курс);`
	],
	"extra": "Живу в Калининграде;<br/>год рождения &mdash; 1984.",
}//cvTxtRu

