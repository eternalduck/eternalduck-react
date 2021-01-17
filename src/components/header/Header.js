import React, {useEffect, useState, useContext} from "react"
import {Menu, MobMenu} from "../Menu/Menu"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"

import ContentWidth from "../Layout/ContentWidth"
import ToggleTheme from "../ToggleTheme/ToggleTheme"
import {isMobile} from "../helpers/responsive"

const Header = (props) => {
	const {isMob} = isMobile()

	return (
		<ContentWidth>
			<HeaderSc>
				<MenuWrap>
					{isMob ? <MobMenu/> : <Menu/>}
				</MenuWrap>
				<ToggleThemeWrap>
					<ToggleTheme/>
				</ToggleThemeWrap>
			</HeaderSc>
		</ContentWidth>
	)
}

const HeaderSc = styled.div`
	margin-top: 15px;
	margin-bottom: 70px;
	z-index: 100;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: flex-start;
	${media.md`
		justify-items: space-between;
	`}
`

const MenuWrap = styled.div`
	outline: 1px dashed cyan;
	flex: 1 0 50%;
	${media.md`
		flex: 0 1 70%;
	`}
	
`

const ToggleThemeWrap = styled.div`
	outline: 1px dashed yellowgreen;
	align-self: flex-end;
	flex: 0 1 50%;
	${media.md`
		flex: 0 1 20%;
	`}
`

export default Header
