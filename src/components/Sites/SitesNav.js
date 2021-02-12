import React, {useState, useEffect} from "react"
import styled, {keyframes} from "styled-components"
import {Link, useRouteMatch} from "react-router-dom"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {Icon, InlineIcon} from "@iconify/react"


import previousIcon from "@iconify/icons-flat-color-icons/previous"
import nextIcon from "@iconify/icons-flat-color-icons/next"

// expects nav prop object
// {prev: {"slug": "", "title": ""},
// 	next: {"slug": "", "title": ""}}

const SitesNav = (props) => {
	// useEffect(() => {//WTF called twice, works but just find out why
	// 	console.info(`useEffect[props.nav] called`)
	// }, [props.nav])

	return (
			<NavContainer>
				<span>
				{props.nav.prev.slug &&
					<LinkSc href={`${props.nav.prev.slug}`}>
						<IconSC icon={previousIcon}/>
						<span>{props.nav.prev.title}</span>
					</LinkSc>
				}
				</span>
				<span>
				{props.nav.next.slug &&
					<LinkSc href={`${props.nav.next.slug}`}>
						<span>{props.nav.next.title}</span>
						<IconSC icon={nextIcon}/>
					</LinkSc>
				}
				</span>
			</NavContainer>
	)
}

const NavContainer = styled.div`//should sit in relative container!
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
	margin-top: 50px;
	margin-bottom: 50px;
`

// const Item = styled.div`
// `
const LinkSc = styled.a`//TODO Link or a?? Link failed, check router
	color: ${colors.almostWhite};
	font-size: 18px;
	display: flex;
	align-items: center;
	${mixins.borderUnderline}
	& span {
		display: inline-block;
		margin: 0 10px;
	}
`
const IconSC = styled(Icon)`
	font-size: 24px;
	transiton: transform .3s ease-in;
	&:hover {opacity: .95}
	& path {fill: ${colors.almostWhite};}
`
export default SitesNav
