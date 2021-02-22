import React from "react"
import {Link} from "react-router-dom"
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
				{props.isFront ? <Logo/> : <Link to={"/"}><Logo/></Link>}
				<MenuWrap>
					{isMob ? <MobMenu/> : <Menu/>}
				</MenuWrap>
				{props.children && <Extra>{props.children}</Extra>}
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
	margin-bottom: 30px;
	padding-top: 15px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	${mixins.printHidden}
	${media.md`
		margin-bottom: 50px;
	`}
`
const Logo = styled.div`
	//outline: 1px dashed red;
	order: 1;
	flex: 0 0 60px;
	width: 60px;
	height: 60px;
	background: url("/images/logo-sprite.png") 0 0 no-repeat;
	background-size: 100%;
	margin-right: 15px;
	border-radius: 50%;
	${mixins.boxShadowSmall()};
	${media.md`
		margin-right: 40px;
	`}
	&:hover {
		background-position: 0 -60px;
	}
`
const Extra = styled.div`
	//outline: 1px dashed yellow;
	flex: 4;
	order: 2;
	display: flex;
	${media.md`
		order: 3;
		justify-content: flex-end;
	`}
`
const MenuWrap = styled.div`
	//outline: 1px dashed cyan;
	display: flex;
	justify-content: flex-end;
	flex: 0 0 50px;
	order: 4;
	margin-left: 20px;
	${media.md`
		flex: 1;
		order: 2;
		margin-left: 0;
		justify-content: flex-start;
	`}
`
const ToggleThemeWrap = styled.div`
	//outline: 1px dashed red;
	flex: 2;
	order: 3;
	display: flex;
	justify-content: flex-end;
	${media.md`
		order: 4;
	`}
`

export default Header
