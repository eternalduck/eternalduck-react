import React, {useState, useEffect} from "react"
import styled, {keyframes} from "styled-components"
import {Link, useRouteMatch} from "react-router-dom"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {Icon, InlineIcon} from "@iconify/react"


import previousIcon from "@iconify/icons-flat-color-icons/previous"
import nextIcon from "@iconify/icons-flat-color-icons/next"

// expects prev/next prop object {"slug": "", "title": ""}
const SitesNav = (props) => {

	// useEffect(() => {
	//
	// }, [])

	return (
			<NavContainer>
				<span>
				{props.prev &&
					<LinkSc href={`${props.prev.slug}`}>
						<IconSC icon={previousIcon}/>
						<span>{props.prev.title}</span>
					</LinkSc>
				}
				</span>
				<span>
				{props.next &&
					<LinkSc href={`${props.next.slug}`}>
						<span>{props.next.title}</span>
						<IconSC icon={nextIcon}/>
					</LinkSc>
				}
				</span>
			</NavContainer>
	)
}

const NavContainer = styled.div`//should sit in relative container!
	outline: 1px dashed darkred;
	display: flex;
	justify-content: space-between;
	padding: 15px 0;
`

// const Item = styled.div`
// `
const LinkSc = styled.a`//TODO Link or a?? Link failed, check router
	outline: 1px dashed yellow;
	font-size: 20px;
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
	& path {fill: #fff}
`
export default SitesNav
