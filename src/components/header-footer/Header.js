import React, {forwardRef} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {mixins} from "../../style/vars-mixins/_mixins";
import {media} from "../../style/vars-mixins/_media";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import ContentWidth from "../Layout/ContentWidth";
import {Menu, MobMenu} from "../Menu/Menu";
import {isMobile} from "../helpers/responsive";

const Header = forwardRef((props, ref) => {
	const {isMob} = isMobile();

	return (
		<HeaderSc ref={ref}>
			<ContentWidth>
				<HeaderInner>
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
				</HeaderInner>
			</ContentWidth>
		</HeaderSc>
	);
});
// for forwardRef:
// Another option is to just disable that particular linter, using a comment with this or similar just above the declaration of your component:
// "eslint-disable-next-line react/display-name"
Header.displayName = "Header";

const HeaderSc = styled.header`
	${mixins.printHidden};
`;
const HeaderInner = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	z-index: 100;
`;
const Logo = styled.div`
	order: 1;
	flex: 0 0 60px;
	width: 60px;
	height: 60px;
	background: url("/images/logo-sprite.png") 0 0 no-repeat;
	background-size: 100%;
	margin-right: 15px;
	border-radius: 50%;
	${mixins.boxShadowSmall()};
	@media ${media.md}{
		margin-right: 40px;
	}
	&:hover {
		background-position: 0 -60px;
	}
`;
const Extra = styled.div`
	flex: 4;
	order: 2;
	display: flex;
	@media ${media.md}{
		order: 3;
		justify-content: flex-end;
	}
`;
const MenuWrap = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 0 0 50px;
	order: 4;
	margin-left: 20px;
	@media ${media.md}{
		flex: 1;
		order: 2;
		margin-left: 0;
		justify-content: flex-start;
	}
`;

const ToggleThemeWrap = styled.div`
	flex: 2;
	order: 3;
	display: flex;
	justify-content: flex-end;
	@media ${media.md}{
		order: 4;
	}
`;

export default Header;
