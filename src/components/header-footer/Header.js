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
				{props.children &&
				<Extra>{props.children}</Extra>
				}
				{!props.isFront &&
					<ToggleThemeWrap>
						<ToggleTheme/>
					</ToggleThemeWrap>
				}
			</HeaderSc>
		</ContentWidth>
	)
}

const HeaderSc = styled.div`
	margin-bottom: 50px;
	padding-top: 15px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	z-index: 100;
	${mixins.printHidden}
`
const Extra = styled.div`
	//outline: 1px dashed cyan;
	flex: 5;
`

const MenuWrap = styled.div`
	//outline: 1px dashed orange;
	flex: 5;
`

const ToggleThemeWrap = styled.div`
	//outline: 1px dashed yellowgreen;
	flex: 2;
	display: flex;
	align-content: center;
	justify-content: flex-end;
`

export default Header
