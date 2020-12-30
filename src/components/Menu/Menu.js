import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {vars, media, mixinContentWidth, mixinHoverBg, mixinNoUnderline} from '../../scss/vars/_index'


import {menuItems} from '../data/menuItems'

// import cssM from './menu.scss'

//TODO home icon
import { Icon, InlineIcon } from "@iconify/react"
import aboutIcon from '@iconify/icons-flat-color-icons/about'

const Menu = (props) => {
	return (
		// <nav className={cssM.menu}>
		<MenuSC>
		{menuItems.map(item => (
			<NavLink key={item.id}
				to={item.url}
				// className={cssM.menuItem}
				// activeClassName={cssM.active}
				exact={true}
				// id={item.id}
				// dangerouslySetInnerHTML={{ __html: item.txt}}//icon fails
			>
				{item.txt}
			</NavLink>
		))}
		</MenuSC>
		// </nav>
	)}

const MenuSC = styled.nav`
	${mixinContentWidth};
	a {
		font-family: "Courier New", monospace;
		color: ${vars.white};
		position: relative;
		margin: 0 30px 50px 0;
		padding-bottom: 5px;
		font-weight: 600;
		font-size: 2rem;
		text-decoration: none;
		z-index: 1;
		transition: color 0.3s ease-in;
		${mixinNoUnderline};
		${mixinHoverBg};
		&.active {
			cursor: default;
			pointer-events: none;
			&:after, &:hover:after {
				background: ${vars.tenderPinkTransp};
			}
		}
		header.dark & {
			color: ${vars.vioDark};
		}
	}
`
export default Menu
