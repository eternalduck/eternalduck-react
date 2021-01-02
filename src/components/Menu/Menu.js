import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {colors, media, mixinContentWidth, mixinHoverBg, mixinNoUnderline, mixinBoxShadowMid} from '../../scss/vars-mixins/_index'


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
		color: ${colors.white};
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
		//${mixinBoxShadowMid()};
		&.active {
			cursor: default;
			pointer-events: none;
			&:after, &:hover:after {
				background: ${colors.tenderPinkTransp};
			}
		}
		header.dark & {
			color: ${colors.vioDark};
		}
	}
`
export default Menu
