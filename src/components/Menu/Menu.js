import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {mixins, media} from '../../scss/vars-mixins/_index'
import {menuItems} from '../data/menuItems'

//TODO home icon
// import { Icon, InlineIcon } from "@iconify/react"
// import aboutIcon from '@iconify/icons-flat-color-icons/about'

const Menu = (props, theme) => {
	return (
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
	)}

const MenuSC = styled.nav`
	a {
		font-family: "Courier New", monospace;
		color: #fff;//${props => props.theme.white};
		position: relative;
		margin: 0 30px 50px 0;
		padding-bottom: 5px;
		font-weight: 600;
		font-size: 2rem;
		text-decoration: none;
		z-index: 1;
		transition: color 0.3s ease-in;
		${mixins.noUnderline};
		${mixins.hoverBg};
		// ${mixins.boxShadowMid()};
		&.active {
			cursor: default;
			pointer-events: none;
			// &:after, &:hover:after {
			// 	background: ${props => props.theme.tenderPinkTransp};
			// }
		}
		// header.dark & {
		// 	color: ${props => props.theme.vioDark};
		// }
	}
`
export default Menu
