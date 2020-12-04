import React from 'react'
import {Link} from "react-router-dom"

import css from '../../scss/main.scss'
import cssH from './header.scss'

// import { Icon, InlineIcon } from "@iconify/react"
// import homeLine from '@iconify/icons-clarity/home-line'
import aboutIcon from '@iconify/icons-flat-color-icons/about'
// import iconMedal from '@iconify/icons-openmoji/1st-place-medal'
import {menuItems} from '../data/menuItems'

/* <h1 className={css.title}>{title} <InlineIcon icon={homeLine} className="icon"/></h1>
<Icon icon={aboutIcon} className="icon"/> */

// const title = 'Header React'
// const log = () => console.log("smth")
// log()


const Header = (props) => {
	// let headerColor = ''
	return (
	<header className={`
		${cssH.header}
		${props.headerColor === 'dark' ? cssH.dark : ''}
	`}>
		<nav className={css.contentWidth}>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/sites">Sites</Link>
			</li>
			<li>
				<Link to="/test">Test</Link>
			</li>
		</ul>
		{//menuItems.map(item => (
			// <a key={item.id}
			// 	href={item.url}
			// 	id={item.id}
			// 	// className={router.pathname == item.url ? "current" : ""}
			// 	dangerouslySetInnerHTML={{ __html: item.txt}}//icon fails
			// >
			// 	{/* {item.txt} */}
			// </a>
		//))
		}
		</nav>
	</header>
	)}

export default Header
