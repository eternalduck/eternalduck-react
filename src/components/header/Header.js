import React from 'react'
import css from './header.scss'
import { Icon, InlineIcon } from "@iconify/react";
import homeLine from '@iconify/icons-clarity/home-line';
import aboutIcon from '@iconify/icons-flat-color-icons/about';
import iconMedal from '@iconify/icons-openmoji/1st-place-medal';

const title = 'Header React'

const Header = ({
		// title
	}) => 
	<header className={css.headerXXX}>
		<h1 className={css.title}>{title} <InlineIcon icon={homeLine} className="icon"/></h1>
		<Icon icon={aboutIcon} className="icon"/>
		<p className={css.txt}>header txt</p>
	</header>

export default Header