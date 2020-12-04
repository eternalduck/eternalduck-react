// do we need navPrevTxt, navPrev, navNextTxt, navNext??
// do we need empty values or just delete them?

export const sitesList = [
	{
		"slug": "43-nikatech",
		"title": "Nika Tech Family",
		"thumb": "/images/work/sites/thumbs/43-nikatech.jpg",
		"images": {
			"img": "/images/work/sites/43-nikatech.jpg"
		},
		"url": "https://nikatech.net",
		"url2": "",
		"keywords": "2020, wordpress, responsive, gulp",
		"descrEn": "A Wordpress site for an animation studio.",
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
		"title": "Propellers Animation Studio",
		"thumb": "/images/work/sites/thumbs/42-propellers-pro.jpg",
		"images": {
			"img": "/images/work/sites/42-propellers-pro.jpg"
		},
		"url": "https://propellers.pro",
		"url2": "",
		"keywords": "2020, wordpress, responsive, gulp",
		"descrEn": "A Wordpress site for an animation studio.",
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
		"title": "Torex Doors Factory",
		"thumb": "/images/work/sites/thumbs/41-torexdoors.jpg",
		"images": {
			"img": "/images/work/sites/41-torexdoors.jpg"
		},
		"url": "https://torex.ru",
		"url2": "behance.net/gallery/73728351/Cajt-dlja-zavoda-stalnyh-dverej-toreks",
		"txt2": "Behance",
		"keywords": "2018, html, javascript, responsive, gulp",
		"descrEn": "A big site for a well-known door factory.",
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
		"title": "Promet Doors Factory",
		"thumb": "/images/work/sites/thumbs/40-prometdoors.jpg",
		"images": {
			"img": "/images/work/sites/40-prometdoors.jpg"
		},
		"url": "https://promet-door.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2018, html, javascript, responsive, gulp",
		"descrEn": "",
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
		"title": "Kontur Doors Factory",
		"thumb": "/images/work/sites/thumbs/39-kontur.jpg",
		"images": {
			"img": "/images/work/sites/39-kontur.jpg"
		},
		"url": "https://dveri-kontur.ru/",
		"url2": "",
		"txt2": "",
		"keywords": "2018, html, javascript, responsive, gulp",
		"descrEn": "",
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
		"url": "https://salespilot.ru",
		"keywords": "2018, html, javascript",
		"descrEn": "Big landing page for commercial offers system. All three versions are different, many sections are collaped with jQuery UI accordion and some custom code. <br/>Here are desktop, tablet and mobile versions.",
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
		"title": "Banks Research Landing",
		"thumb": "/images/work/sites/thumbs/37-banks.jpg",
		"images": {
			"img": "/images/work/sites/37-banks.jpg"
		},
		"url": "https://blog.completo.ru/research-finance",
		"url2": "behance.net/gallery/70731771/posadochnaja-dlja-issledovanija-internet-marketinga-bankov",
		"txt2": "Behance",
		"keywords": "2018, html, javascript",
		"descrEn": "Fully responsive landing page for bank analytics research service.",
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
		"title": "Stupino Chemical Plant",
		"thumb": "/images/work/sites/thumbs/36-cxz.jpg",
		"images": {
			"img": "/images/work/sites/36-cxz.jpg"
		},
		"url": "https://cxz.ru",
		"url2": "behance.net/gallery/70731049/sajt-dlja-stupinskogo-himicheskogo-zavoda",
		"txt2": "Behance",
		"keywords": "2017, bitrix, html",
		"descrEn": "Well-known Russian chemical factory that produces detergents & other home care products. I was responsible for all HTML coding and visual part of JS too.",
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
		"url2": "",
		"txt2": "",
		"keywords": "2017, html, php",
		"descrEn": "Internal system for managing commercial offers based on some old customized php-framework. I’ve done all styling from scratch & frontend layout where possible. It was a difficult spider work but we’ve done it!<br/>Below are the screens of backend (for managers) & presentational part (for clients).",
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
		"title": "Photographer's Gallery",
		"thumb": "/images/work/sites/thumbs/34-noradrugan.jpg",
		"images": {
			"img": "/images/work/sites/34-noradrugan.jpg"
		},
		"url": "https://noradrugan.com",
		"url2": "",
		"txt2": "",
		"keywords": "2016, bootstrap, responsive, wordpress",
		"descrEn": "Responsive photo collection with Masonry layout & Lightbox in two languages, custom page templates based on post categories.",
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
		"title": "Kids' Education",
		"thumb": "/images/work/sites/thumbs/33-postupi.jpg",
		"images": {
			"img": "/images/work/sites/33-postupi.jpg"
		},
		"url": "https://maxkotkov.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2016, html, parallax, responsive",
		"descrEn": "The landing page for pre-school kids courses.",
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
		"url": "https://1vip.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2016, bootstrap, javascript, responsive, wordpress",
		"descrEn": "Presentation site for popular Russian 1C accounting system. Custom frontpage based on widgets, custom structure & page templates. For this site I’ve created my first WordPress plugin: <a href='http://1vip.ru/calculator/' target='_blank'>a&nbsp;calculator</a> that shows a client an estimate cost of services they have selected. All prices entered in the back-end are stored in the plugin’s database table.",
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
		"title": "Splat Products",
		"thumb": "/images/work/sites/thumbs/31-splat.jpg",
		"images": {
			"img": "/images/work/sites/31-splat.jpg"
		},
		"url": "https://splat.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2016, bitrix, content management",
		"descrEn": "Here I was working on some layout updates, bug fixes, cross-browser compatibility, products catalog rearrangement and content management.",
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
		"title": "Gas Equipment",
		"thumb": "/images/work/sites/thumbs/30-ptfm.jpg",
		"images": {
			"img": "/images/work/sites/30-ptfm.jpg"
		},
		"url": "https://ptfm.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2016, bootstrap, catalog, javascript, wordpress",
		"descrEn": "This site for gas detectors & signalisation equipment is built on WordPress with the Bootstrap grid layout, has a customized catalog structure, the frontpage is based on widgets and selective posts output. I’ve written the jQuery calculator for counting quantity & price for the products and then insert a summary into the form and send this order to a manager.",
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
		"title": "Moroni Cleaning",
		"thumb": "/images/work/sites/thumbs/28-moroniclean.jpg",
		"images": {
			"img": "/images/work/sites/28-moroniclean.jpg"
		},
		"url": "https://moroniclean.com",
		"url2": "",
		"txt2": "",
		"keywords": "2015, html, javascript, responsive",
		"descrEn": "The site for dry-ceaning services. A year later the client has changed the design for some reason but my features remained. I had also written a js script for price list to build-up an order to be sent to a manager via feedback form.",
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
		"title": "Designer's Homepage",
		"thumb": "/images/work/sites/thumbs/27-maru.jpg",
		"images": {
			"img": "/images/work/sites/27-maru.jpg"
		},
		"url": "https://maru.su",
		"url2": "",
		"txt2": "",
		"keywords": "2015, responsive, wordpress",
		"descrEn": "I helped a designer to customize WordPress theme for her needs.",
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
		"title": "AnastasiaDate's Blog",
		"thumb": "/images/work/sites/thumbs/25-bloganastasiadate.jpg",
		"images": {
			"img": "/images/work/sites/25-bloganastasiadate.jpg"
		},
		"url": "https://blog.anastasiadate.com",
		"url2": "",
		"txt2": "",
		"keywords": "2015, blog, wordpress",
		"descrEn": "<p>Just another WordPress blog for dating news & articles. Added a custom script for showing random banners in the sidebar.</p>",
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
		"title": "Travel Mates Landing",
		"thumb": "/images/work/sites/thumbs/24-asiantravelmates.jpg",
		"images": {
			"img": "/images/work/sites/24-asiantravelmates.jpg"
		},
		"url": "https://asiantravelmates.com",
		"url": "https://asiantravelmates.com",
		"url2": "",
		"txt2": "",
		"keywords": "2014, html, javascript, landing page, parallax",
		"descrEn": "Promo page for attracting clients’ registrations. Nice parallax clouds, popups, registration form.",
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
		"title": "Rally Promo Site",
		"thumb": "/images/work/sites/thumbs/23-rallybabes.jpg",
		"images": {
			"img": "/images/work/sites/23-rallybabes.jpg"
		},
		"url2": "",
		"txt2": "",
		"keywords": "2014, responsive, wordpress",
		"descrEn": "<p>Promo site devoted to Gumball Rally 2014 sponsored by AnastasiaDate, Inc. It was mobile friendly, had countdown before the rally starts, registration form unlocking the overlay on a page with girls’ photos.</p><p>Unfortunately, the site isn’t live anymore..</p>",
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
		"title": "Dating Partners Network",
		"thumb": "/images/work/sites/thumbs/22-global-companions.jpg",
		"images": {
			"img": "/images/work/sites/22-global-companions.jpg"
		},
		"url": "https://global-companions.com",
		"url2": "",
		"txt2": "",
		"keywords": "2014, bootstrap, html, responsive",
		"descrEn": "Multilingual site on Bootstrap template.",
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
		"title": "Dating Landing",
		"thumb": "/images/work/sites/thumbs/13-marryasianbride.jpg",
		"images": {
			"img": "/images/work/sites/13-marryasianbride.jpg"
		},
		"url": "https://",
		"url2": "",
		"txt2": "",
		"keywords": "2013, html",
		"descrEn": "One of many landing pages for acquiring new clients via registration form, with popups and circular photo gallery.",
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
		"title": "Drivers Training Center",
		"thumb": "/images/work/sites/thumbs/04-auto2000.jpg",
		"images": {
			"img": "/images/work/sites/04-auto2000.jpg"
		},
		"url": "https://auto2000.su",
		"url2": "",
		"txt2": "",
		"keywords": "2011, content management, drupal",
		"descrEn": "Drivers' school on Drupal with slightly customized standard template.",
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
		"title": "Medical Center",
		"thumb": "/images/work/sites/thumbs/03-clinic-cs.jpg",
		"images": {
			"img": "/images/work/sites/03-clinic-cs.jpg"
		},
		"url": "https://clinic-cs.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2011, html, joomla",
		"descrEn": "The site for a medical institution on a customized Joomla template.",
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
		"title": "Furniture Factory",
		"thumb": "/images/work/sites/thumbs/02-ronikon.jpg",
		"images": {
			"img": "/images/work/sites/02-ronikon.jpg"
		},
		"url": "https://ronikon.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2010, html, content management",
		"descrEn": "Of course, the site has been changed since 2010, but at that time I’d made the entire frontpage layout &mdash; it was my first serious html work.",
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
		"title": "A Hospital",
		"thumb": "/images/work/sites/thumbs/01-hospital-cs.jpg",
		"images": {
			"img": "/images/work/sites/01-hospital-cs.jpg"
		},
		"url": "https://hospital-cs.ru",
		"url2": "",
		"txt2": "",
		"keywords": "2010, content management, joomla",
		"descrEn": "",
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
