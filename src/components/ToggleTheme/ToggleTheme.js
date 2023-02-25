import React, {useState, useEffect} from "react";
import styled, {css, keyframes, createGlobalStyle} from "styled-components";
import {media, colors, mixins} from "../../style/vars-mixins/_index";
import {Icon, InlineIcon} from "@iconify/react";
import crescentMoon from "@iconify/icons-noto/crescent-moon";
import smilingFaceWithSunglasses from "@iconify/icons-noto/smiling-face-with-sunglasses";
// import brightButton from "@iconify/icons-noto/bright-button"
// import {ThemeContext} from "../../Root"


const ToggleTheme = (props) => {
	// 	const [isLightTheme, setLightTheme] = useState(checkUserTheme())
// 	useEffect(() => {
// 		localStorage.setItem("isLight", isLightTheme)
// 		// localStorage.setItem("isLight", JSON.stringify(isLightTheme))
// 	}, [isLightTheme])
//
// 	function checkUserTheme() {
// 		const isReturningUser = "isLight" in localStorage
// 		const userPrefersDark = () => {
// 			if(!window.matchMedia) return
// 			return window.matchMedia("(prefers-color-scheme: dark)").matches
// 		}
// 		if (isReturningUser) {
// 			localStorage.getItem("isLight")// TODO: some fail with undefined at start
// 			// JSON.parse(localStorage.getItem("isLight"))
// 		} else if (userPrefersDark) {
// 			return false
// 		} else {
// 			return false//default dark at first visit
// 		}
// 	}//checkUserTheme
//
// 	const toggleTheme = () => {
// 		setLightTheme(prev => !prev)
// 		console.info(`isLight is ${isLightTheme}!`)
// 	}
//////////////////////////////
	//controlled checkbox
	const [checked, setChecked] = useState(false);
	const toggle = () => setChecked(prev => !prev);
	return (
		<SwitchWrap htmlFor="theme-switch">
			{/*FAIL: Warning: Received `true` for a non-boolean attribute `$shake`*/}
			<Icon icon={crescentMoon}/> {/*$shake={!checked}*/}
				<Checkbox type="checkbox"
					id="theme-switch"
					onChange={toggle}
					checked={checked}//SwitchWrap
					// FAIL isLightTheme undefined at start
					// checked={isLightTheme ? true : false}
				/>
				<Switch/>
			<IconSC icon={smilingFaceWithSunglasses}/> {/*$shake={checked}*/}
		</SwitchWrap>
	);
};

export default ToggleTheme;

const SwitchWrap = styled.label`
	width: 120px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Switch = styled.div`
	position: relative;
	width: 45px;
	height: 22px;
	background-color: ${props => props.theme.name === "dark" ? colors.midGray : colors.litestGray}; 
	border-radius: 15px;
	cursor: pointer;
	opacity: .9;
	transition: background-color .3s ease-in, opacity .3s ease-in;
	&:hover {opacity: 1;}
	&:before {//handle
		content: "";
		display: block;
		position: absolute;
		left: 2px;
		top: 2px;
		width: 18px;
		height: 18px;
		border-radius: 10px;
		background-color: ${props => props.theme.name === "dark" ? colors.black3 : colors.liteGray};
		box-shadow: 1px 1px 2px rgba(0, 0, 0, .35);
		transition: transform .3s ease-in, background-color .3s ease-in;
	}
	input:checked + &:before {
		transform: translate(20px);
	}
	
`;
const Checkbox = styled.input`
	display: none;
`;
//TODO disable shake on page load
const shaking = keyframes`
	0% {transform: translateX(0)}
	25% {transform: translateX(1px) rotate(1deg) scale(.97)}
	50% {transform: translateX(0) rotate(0)}
	75% {transform: translateX(-1px) rotate(-1deg)}
	100% {transform: translateX(0) rotate(0) scale(1)}
`;
const IconSC = styled(Icon)`
	font-size: 20px;
	transiton: transform .3s ease-in;
	cursor: pointer;
	${mixins.hoverOpacity};
	${props => props.$shake ?//$shake is sc transient prop
		css`animation: ${shaking} .3s ease-in;
			animation-iteration-count: 2;`
		: null
	};
	${media.md`
		font-size: 24px;
	`}
`;
