import React, {useState, useEffect} from "react";
import "./ToggleTheme.module.scss";
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
		<div className={"theme-switch"} htmlFor="theme-switch">
			{/*FAIL: Warning: Received `true` for a non-boolean attribute `$shake`*/}
			<Icon icon={crescentMoon}/> {/*$shake={!checked}*/}
				<input className={"theme-switch__toggle"} type="checkbox"
					id="theme-switch"
					onChange={toggle}
					checked={checked}//SwitchWrap
					// FAIL isLightTheme undefined at start
					// checked={isLightTheme ? true : false}
				/>
				<div className={"Switch"}></div>
			<Icon className={"IconDarkMode"} icon={smilingFaceWithSunglasses}/> {/*$shake={checked}*/}
		</div>
	);
};

export default ToggleTheme;
