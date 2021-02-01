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
	//margin-bottom: 50px;
	padding-top: 15px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	z-index: 100;
	// ${media.md`
	// 	justify-content: space-between;
	// `}
`

const MenuWrap = styled.div`
	//outline: 1px dashed cyan;
	flex: 1;
`

const ToggleThemeWrap = styled.div`
	//outline: 1px dashed yellowgreen;
	display: flex;
	align-content: center;
	justify-content: flex-end;
	flex: 1;
`

export default Header
