// do we need navPrevTxt, navPrev, navNextTxt, navNext??
import React from "react"
import {Icon, InlineIcon} from "@iconify/react"
import crescentMoon from "@iconify/icons-noto/crescent-moon"


export const sitesList = [
	{
		"slug": "45-portfolio",
		"hasSinglePage": false,
		"title": "this.portfolio on React",
		"thumb": "/images/work/sites/thumbs/45-portfolio.jpg",
		"images": {
			"img": "/images/work/sites/45-portfolio.jpg"
		},
		"urlTxt": "Github",
		"url": "https://github.com/eternalduck/eternalduck-react",
		"keywords": "js, react, webpack, styled-components, responsive",
		"year": "2021",
		// "icon": <Icon icon={crescentMoon} className={"icon_big"}/>,
		"descr": `{() => <Icon icon={crescentMoon} className={"icon_big"}/>} TMP: It receives a function that will be called in the ConditionalWrapper component itself when the condition is true. There it will receive the implicit children as argument. And will return what it receives wrapped in whatever we want; in this case, a link. This small implementation is quite powerful and, though it might be a bit hard to read at first, fixes our problem of duplicate code.`,
		"descrRu": "",
		"nav": [
			{//prev
				"txt": "React Registration Module",
				"link": "44-onboarding"
			},
			{//next
				"txt": "",
				"link": ""
			}
		],
	},
	{
		"slug": "44-onboarding",
		"hasSinglePage": true,
		"title": "React Registration Module",
		"thumb": "/images/work/sites/thumbs/44-onboarding.jpg",
		"images": {
			"img": "/images/work/sites/44-onboarding.jpg"
		},
		"urlTxt": "Github",
		"url": "https://github.com/eternalduck/prtfl-react-form",
		"keywords": "js, react, sass, webpack, responsive",
		"year": "2020",
		"descr": "TMP: It receives a function that will be called in the ConditionalWrapper component itself when the condition is true. There it will receive the implicit children as argument. And will return what it receives wrapped in whatever we want; in this case, a link. This small implementation is quite powerful and, though it might be a bit hard to read at first, fixes our problem of duplicate code.",
		"descrRu": "",
		"nav": [
			{//prev
				"txt": "Nika Tech Family",
				"link": "43-nikatech"
			},
			{//next
				"txt": "",
				"link": ""
			}
		],
	},
	{
		"slug": "43-nikatech",
		"hasSinglePage": false,
		"title": "Nika Tech Family",
		"thumb": "/images/work/sites/thumbs/43-nikatech.jpg",
		"images": {
			"img": "/images/work/sites/43-nikatech.jpg"
		},
		"urlTxt": "nikatech.net",
		"url": "https://nikatech.net",
		"keywords": "wordpress, php, js, bootstrap, sass, responsive, gulp",
		"year": "2020",
		"descr": "TMP: This small implementation is quite powerful and, though it might be a bit hard to read at first, fixes our problem of duplicate code.",
		"descrRu": "",
		"nav": [
			{//prev
				"txt": "Propellers Animation Studio",
				"link": "42-propellers"
			},
			{//next
				"txt": "",
				"link": ""
			}
		],
	},
	{
		"slug": "42-propellers",
		"hasSinglePage": false,
		"title": "Propellers Animation Studio",
		"thumb": "/images/work/sites/thumbs/42-propellers-pro.jpg",
		"images": {
			"img": "/images/work/sites/42-propellers-pro.jpg"
		},
		"urlTxt": "propellers.pro",
		"url": "https://propellers.pro",
		"keywords": "wordpress, php, js, sass, responsive, gulp",
		"year": "2020",
		"descr": "A Wordpress site for an animation studio. TMP: It receives a function that will be called in the ConditionalWrapper component itself when the condition is true. There it will receive the implicit children as argument. And will return what it receives wrapped in whatever we want; in this case, a link.",
		"descrRu": "",
		"nav": [
			{//prev
				"txt": "Torex Doors Factory",
				"link": "41-torex-doors-factory"
			},
			{//next
				"txt": "Nika Tech Family",
				"link": "43-nikatech"
			}
		],
	},
	{
		"slug": "41-torex",
		"hasSinglePage": false,
		"title": "Torex Doors Factory",
		"thumb": "/images/work/sites/thumbs/41-torexdoors.jpg",
		"images": {
			"img": "/images/work/sites/41-torexdoors.jpg"
		},
		"urlTxt": "torex.ru",
		"url": "https://torex.ru",
		"urlTxt2": "Behance",
		"url2": "https://behance.net/gallery/73728351/Cajt-dlja-zavoda-stalnyh-dverej-toreks",
		"txt2": "Behance",
		"keywords": "html, sass, js, responsive, gulp",
		"year": "2018",
		"descr": "A big site for a well-known door factory.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Promet Doors Factory",
				"link": "40-promet-doors-factory"
			},
			{
				"txt": "Propellers Studio",
				"link": "42-propellers-pro"
			}
		],
	},
	{
		"slug": "40-promet",
		"hasSinglePage": false,
		"title": "Promet Doors Factory",
		"thumb": "/images/work/sites/thumbs/40-prometdoors.jpg",
		"images": {
			"img": "/images/work/sites/40-prometdoors.jpg"
		},
		"urlTxt": "promet-door.ru",
		"url": "https://promet-door.ru",
		"keywords": "html, jquery, less, responsive, gulp",
		"year": "2018",
		"descr": "",
		"descrRu": "",
		"nav": [
			{
				"txt": "Kontur Doors Factory",
				"link": "39-kontur-doors-factory"
			},
			{
				"txt": "Torex Doors Factory",
				"link": "41-torex-doors-factory"
			}
		],
	},
	{
		"slug": "39-kontur",
		"hasSinglePage": false,
		"title": "Kontur Doors Factory",
		"thumb": "/images/work/sites/thumbs/39-kontur.jpg",
		"images": {
			"img": "/images/work/sites/39-kontur.jpg"
		},
		"urlTxt": "dveri-kontur.ru",
		"url": "https://dveri-kontur.ru/",
		"keywords": "html, jquery, sass, responsive, gulp",
		"year": "2018",
		"descr": "",
		"descrRu": "",
		"nav": [
			{
				"txt": "Commercial Offers Landing",
				"link": "38-commercial-offers-landing"
			},
			{
				"txt": "Promet Doors Factory",
				"link": "40-promet-doors-factory"
			}
		],
	},
	{
		"slug": "38-salespilot",
		"hasSinglePage": true,
		"title": "Commercial Offers Landing",
		//group images to array?
		"thumb": "/images/work/sites/thumbs/38-kp-land.jpg",
		"images": [
			{//TODO make a smaller previews
				"preview": "/images/work/sites/38-kp-land_desk.jpg",
				"img": "/images/work/sites/38-kp-land_desk.jpg",
				"title": "Desktop Version"
			},
			{
				"preview": "/images/work/sites/preview/38-kp-land_tabl_prev.jpg",
				"img": "/images/work/sites/38-kp-land_tabl.jpg",
				"title": "Tablet Version"

			},
			{
				"preview": "/images/work/sites/preview/38-kp-land_mob_prev.jpg",
				"img": "/images/work/sites/38-kp-land_mob.jpg",
				"title": "Mobile Version"

			}
		],
		"urlTxt": "salespilot.ru",
		"url": "https://salespilot.ru",
		"keywords": "html, sass, jquery, bootstrap",
		"year": "2018",
		"descr": "Big landing page for commercial offers system. All three versions are different, many sections are collaped with jQuery UI accordion and some custom code. <br/>Here are desktop, tablet and mobile versions.",
		"descrRu": "Большой лэндинг для системы создания и управления коммерческими предложениями. Версии для десктопа, планшета и мобильного &mdash; разные, использовано много трансформаций, как с помощью jQuery UI, так и кастомного кода.",
		"nav": [
			{
				"txt": "Landing for Banks Research",
				"link": "37-landing-for-banks"
			},
			{
				"txt": "Kontur Doors Factory",
				"link": "39-kontur-doors-factory"
			}
		],

	},
	{
		"slug": "37-banks",
		"hasSinglePage": false,
		"title": "Banks Research Landing",
		"thumb": "/images/work/sites/thumbs/37-banks.jpg",
		"images": {
			"img": "/images/work/sites/37-banks.jpg"
		},
		"urlTxt": "blog.completo.ru",
		"url": "https://blog.completo.ru/research-finance",
		"urlTxt2": "Behance",
		"url2": "behance.net/gallery/70731771/posadochnaja-dlja-issledovanija-internet-marketinga-bankov",
		"txt2": "Behance",
		"keywords": "html, jquery, less",
		"year": "2018",
		"descr": "Fully responsive landing page for bank analytics research service.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Chemical Plant",
				"link": "36-chemical-plant"
			},
			{
				"txt": "Commercial Offers Landing",
				"navNext": "38-commercial-offers-landing"
			}
		],

	},
	{
		"slug": "36-cxz",
		"hasSinglePage": false,
		"title": "Stupino Chemical Plant",
		"thumb": "/images/work/sites/thumbs/36-cxz.jpg",
		"images": {
			"img": "/images/work/sites/36-cxz.jpg"
		},
		"urlTxt": "cxz.ru",
		"url": "https://cxz.ru",
		"urlTxt2": "Behance",
		"url2": "behance.net/gallery/70731049/sajt-dlja-stupinskogo-himicheskogo-zavoda",
		"txt2": "Behance",
		"keywords": "html, jquery, sass, bootstrap",
		"year": "2017",
		"descr": "Well-known Russian chemical factory that produces detergents & other home care products. I was responsible for all HTML coding and visual part of JS too.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Commercial Offers System",
				"link": "35-commercial-offers"
			},
			{
				"txt": "Banks Research Landing",
				"link": "37-landing-for-banks"
			}
		],
	},

	{
		"slug": "35-old-php",
		"hasSinglePage": true,
		"title": "Commercial Offers System",
		"thumb": "/images/work/sites/thumbs/35-completo-kp.jpg",
		"images": [
			{//TODO make a smaller preview
				"preview": "/images/work/sites/35-completo-kp-01.jpg",
				"img": "/images/work/sites/35-completo-kp-01.jpg",
				"title": "Dashboard"
			},
			{//TODO make a preview
				"preview": "/images/work/sites/35-completo-kp-02.jpg",
				"img": "/images/work/sites/35-completo-kp-02.jpg",
				"title": "Commercial offer creation page",
			}
		],
		"keywords": "html, php, js, css",
		"year": "2017",
		"descr": "Internal system for managing commercial offers based on some old customized php-framework. I’ve done all styling from scratch & frontend layout where possible. It was a difficult spider work but we’ve done it!<br/>Below are the screens of backend (for managers) & presentational part (for clients).",
		"descrRu": "",
		"nav": [
			{
				"txt": "Photographer's Gallery",
				"link": "34-photography"
			},
			{
				"txt": "Stupino Chemical Plant",
				"link": "36-chemical-plant"
			}
		],
		},

	{
		"slug": "34-noradrugan",
		"hasSinglePage": false,
		"title": "Photographer's Gallery",
		"thumb": "/images/work/sites/thumbs/34-noradrugan.jpg",
		"images": {
			"img": "/images/work/sites/34-noradrugan.jpg"
		},
		"keywords": "wordpress, php, jquery, bootstrap, responsive",
		"year": "2016",
		"descr": "Responsive photo collection with Masonry layout & Lightbox in two languages, custom page templates based on post categories.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Kids' Education",
				"link": "33-kids"
			},
			{
				"txt": "Commercial Offers System",
				"link": "35-commercial-offers"
			}
		],
	},


	{
		"slug": "33-kids",
		"hasSinglePage": false,
		"title": "Kids' Education",
		"thumb": "/images/work/sites/thumbs/33-postupi.jpg",
		"images": {
			"img": "/images/work/sites/33-postupi.jpg"
		},
		"urlTxt": "maxkotkov.ru",
		"url": "https://maxkotkov.ru",
		"keywords": "html, jquery, sass, responsive",
		"year": "2016",
		"descr": "The landing page for pre-school kids courses.",
		"descrRu": "",
		"nav": [
			{
				"txt": "1c Accounting Site",
				"link": "32-1vip"
			},
			{
				"txt": "Photographer's Gallery",
				"link": "34-photography"
			}
		],
	},

	{
		"slug": "32-1vip",
		"hasSinglePage": false,
		"title": "1c Accounting Site",
		"thumb": "/images/work/sites/thumbs/32-1vip.jpg",
		"images": [
			{//TODO make a smaller previews
				"preview": "/images/work/sites/32-1vip.jpg",
				"img": "/images/work/sites/32-1vip.jpg",
				"title": "Frontpage"

			},
			{
				"preview": "/images/work/sites/preview/32-1vip-calc-front_prev.jpg",
				"img": "/images/work/sites/32-1vip-calc-front.jpg",
				"title": "The product calculator"
			},
			{
				"preview": "/images/work/sites/preview/32-1vip-calc-back_prev.jpg",
				"img": "/images/work/sites/32-1vip-calc-back.jpg",
				"title": "The calculator's backend"
			}
		],
		"urlTxt": "1vip.ru",
		"url": "https://1vip.ru",
		"keywords": "wordpress, php, jquery, sass, responsive, bootstrap",
		"year": "2016",
		"descr": "Presentation site for popular Russian 1C accounting system. Custom frontpage based on widgets, custom structure & page templates. For this site I’ve created my first WordPress plugin: <a href='http://1vip.ru/calculator/' target='_blank'>a&nbsp;calculator</a> that shows a client an estimate cost of services they have selected. All prices entered in the back-end are stored in the plugin’s database table.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Splat Products",
				"link": "31-splat"
			},
			{
				"txt": "Kids' Education",
				"link": "33-kids"
			}
		],
	},

	{
		"slug": "31-splat",
	"hasSinglePage": false,
		"title": "Splat Products",
		"thumb": "/images/work/sites/thumbs/31-splat.jpg",
		"images": {
			"img": "/images/work/sites/31-splat.jpg"
		},
		"urlTxt": "splat.ru",
		"url": "https://splat.ru",
		"keywords": "html, css, jquery, bitrix, content management",
		"year": "2016",
		"descr": "Here I was working on some layout updates, bug fixes, cross-browser compatibility, products catalog rearrangement and content management.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Gas Equipment",
				"link": "30-gas-eqipment"
			},
			{
				"txt": "1c Accounting Site",
				"link": "32-1vip"
			}
		],
	},

	{
		"slug": "30-ptfm",
		"hasSinglePage": false,
		"title": "Gas Equipment",
		"thumb": "/images/work/sites/thumbs/30-ptfm.jpg",
		"images": {
			"img": "/images/work/sites/30-ptfm.jpg"
		},
		"urlTxt": "ptfm.ru",
		"url": "https://ptfm.ru",
		"keywords": "wordpress, php, js, sass, bootstrap",
		"year": "2016",
		"descr": "This site for gas detectors & signalisation equipment is built on WordPress with the Bootstrap grid layout, has a customized catalog structure, the frontpage is based on widgets and selective posts output. I’ve written the jQuery calculator for counting quantity & price for the products and then insert a summary into the form and send this order to a manager.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Moroni Cleaning",
				"link": "28-moroniclean"
			},
			{
				"txt": "Splat Products",
				"link": "31-splat"
			}
		],
	},

	{
		"slug": "28-moroni",
		"hasSinglePage": false,
		"title": "Moroni Cleaning",
		"thumb": "/images/work/sites/thumbs/28-moroniclean.jpg",
		"images": {
			"img": "/images/work/sites/28-moroniclean.jpg"
		},
		"urlTxt": "moroniclean.com",
		"url": "https://moroniclean.com",
		"keywords": "html, jquery, sass, responsive",
		"year": "2015",
		"descr": "The site for dry-ceaning services. A year later the client has changed the design for some reason but my features remained. I had also written a js script for price list to build-up an order to be sent to a manager via feedback form.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Designer's Homepage",
				"link": "27-maru"
			},
			{
				"txt": "Gas Equipment",
				"link": "30-gas-eqipment"
			}
		],
	},


	{
		"slug": "27-maru",
		"hasSinglePage": false,
		"title": "Designer's Homepage",
		"thumb": "/images/work/sites/thumbs/27-maru.jpg",
		"images": {
			"img": "/images/work/sites/27-maru.jpg"
		},
		"keywords": "html, sass, wordpress, php, jquery, bootstrap, responsive",
		"year": "2015",
		"descr": "I helped a designer to customize WordPress theme for her needs.",
		"descrRu": "",
		"nav": [
			{
				"txt": "AnastasiaDate's Blog",
				"link": "25-bloganastasiadate"
			},
			{
				"txt": "Moroni Cleaning",
				"link": "28-moroniclean"
			}
		],

	},
	{
		"slug": "25-bloganastasiadate",
		"hasSinglePage": false,
		"title": "AnastasiaDate's Blog",
		"thumb": "/images/work/sites/thumbs/25-bloganastasiadate.jpg",
		"images": {
			"img": "/images/work/sites/25-bloganastasiadate.jpg"
		},
		"urlTxt": "blog.anastasiadate.com",
		"url": "https://blog.anastasiadate.com",
		"keywords": "wordpress, jquery, css",
		"year": "2015",
		"descr": "<p>Just another WordPress blog for dating news & articles. Added a custom script for showing random banners in the sidebar.</p>",
		"descrRu": "",
		"nav": [
			{
				"txt": "Travel Mates Landing",
				"link": "24-asiantravelmates"
			},
			{
				"txt": "Designer's Homepage",
				"link": "27-maru"
			}
		],
	},

	{
		"slug": "24-asiantravelmates",
		"hasSinglePage": false,
		"title": "Travel Mates Landing",
		"thumb": "/images/work/sites/thumbs/24-asiantravelmates.jpg",
		"images": {
			"img": "/images/work/sites/24-asiantravelmates.jpg"
		},
		"urlTxt": "asiantravelmates.com",
		"url": "https://asiantravelmates.com",
		"keywords": "html, sass, js",
		"year": "2014",
		"descr": "Promo page for attracting clients’ registrations. Nice parallax clouds, popups, registration form.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Rally Promo Site",
				"link": "23-rallybabes"
			},
			{
				"txt": "AnastasiaDate's Blog",
				"link": "25-bloganastasiadate"
			}
		],
	},
	{
		"slug": "23-rallybabes",
		"hasSinglePage": false,
		"title": "Rally Promo Site",
		"thumb": "/images/work/sites/thumbs/23-rallybabes.jpg",
		"images": {
			"img": "/images/work/sites/23-rallybabes.jpg"
		},
		"keywords": "wordpress, css, jquery, responsive",
		"year": "2014",
		"descr": "<p>Promo site devoted to Gumball Rally 2014 sponsored by AnastasiaDate, Inc. It was mobile friendly, had countdown before the rally starts, registration form unlocking the overlay on a page with girls’ photos.</p><p>Unfortunately, the site isn’t live anymore..</p>",
		"descrRu": "",
		"nav": [
			{
				"txt": "Dating Partners Network",
				"link": "22-global-companions"
			},
			{
				"txt": "Travel Mates Landing",
				"link": "24-asiantravelmates"
			}
		],
	},

	{
		"slug": "22-partners",
		"hasSinglePage": false,
		"title": "Dating Partners Network",
		"thumb": "/images/work/sites/thumbs/22-global-companions.jpg",
		"images": {
			"img": "/images/work/sites/22-global-companions.jpg"
		},
		"urlTxt": "global-companions.com",
		"url": "https://global-companions.com",
		"keywords": "html, css, jquery, responsive, bootstrap",
		"year": "2014",
		"descr": "Multilingual site on Bootstrap template.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Dating Landing",
				"link": "13-marryasianbride"
			},
			{
				"txt": "Rally Promo Site",
				"link": "23-rallybabes"
			}
		],
	},

	{
		"slug": "13-marryasianbride",
		"hasSinglePage": false,
		"title": "Dating Landing",
		"thumb": "/images/work/sites/thumbs/13-marryasianbride.jpg",
		"images": {
			"img": "/images/work/sites/13-marryasianbride.jpg"
		},
		"keywords": "html, css, jquery",
		"year": "2013",
		"descr": "One of many landing pages for acquiring new clients via registration form, with popups and circular photo gallery.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Drivers Training Center",
				"link": "04-auto2000"
			},
			{
				"txt": "Dating Partners Network",
				"link": "22-global-companions"
			}
		],

	},
	{
		"slug": "04-auto2000",
		"hasSinglePage": false,
		"title": "Drivers Training Center",
		"thumb": "/images/work/sites/thumbs/04-auto2000.jpg",
		"images": {
			"img": "/images/work/sites/04-auto2000.jpg"
		},
		"urlTxt": "auto2000.su",
		"url": "https://auto2000.su",
		"keywords": "html, css, drupal, content management, ",
		"year": "2011",
		"descr": "Drivers' school on Drupal with slightly customized standard template.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Medical Center",
				"link": "03-clinic-cs"
			},
			{
				"txt": "Dating Landing",
				"link": "13-marryasianbride"
			}
		],
	},

	{
		"slug": "03-clinic",
		"hasSinglePage": false,
		"title": "Medical Center",
		"thumb": "/images/work/sites/thumbs/03-clinic-cs.jpg",
		"images": {
			"img": "/images/work/sites/03-clinic-cs.jpg"
		},
		"urlTxt": "clinic-cs.ru",
		"url": "https://clinic-cs.ru",
		"keywords": "html, css, joomla",
		"year": "2011",
		"descr": "The site for a medical institution on a customized Joomla template.",
		"descrRu": "",
		"nav": [
			{
				"txt": "Furniture Factory",
				"link": "02-ronikon"
			},
			{
				"txt": "Drivers Training Center",
				"link": "04-auto2000"
			}
		],
	},

	{
		"slug": "02-ronikon",
		"hasSinglePage": false,
		"title": "Furniture Factory",
		"thumb": "/images/work/sites/thumbs/02-ronikon.jpg",
		"images": {
			"img": "/images/work/sites/02-ronikon.jpg"
		},
		"urlTxt": "ronikon.ru",
		"url": "https://ronikon.ru",
		"keywords": ", html, css, jquery, content management",
		"year": "2010",
		"descr": "Of course, the site has been changed since 2010, but at that time I’d made the entire frontpage layout &mdash; it was my first serious html work.",
		"descrRu": "",
		"nav": [
			{
				"txt": "A Hospital",
				"link": "01-hospital-cs"
			},
			{
				"txt": "Medical Center",
				"link": "03-clinic-cs"
			}
		],
	},
	{
		"slug": "01-hospital",
		"hasSinglePage": false,
		"title": "CS Hospital",
		"thumb": "/images/work/sites/thumbs/01-hospital-cs.jpg",
		"images": {
			"img": "/images/work/sites/01-hospital-cs.jpg"
		},
		"urlTxt": "hospital-cs.ru",
		"url": "https://hospital-cs.ru",
		"keywords": "html, css, joomla, content management",
		"year": "2010",
		"descr": "",
		"descrRu": "",
		"nav": [
			{
				"txt": "",
				"link": ""
			},
			{
				"txt": "Furniture Factory",
				"link": "02-ronikon"
			}
		],
	}
]
