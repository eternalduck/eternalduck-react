import React, {useEffect, useState} from "react"
import {media, colors, mixins} from "../../style/vars-mixins/_index"

// Generates an array with randomized colors for items backgrounds, receiving their number as arg
export const generateRandomBg = (itemsNum) => {
	// const bgrounds = [colors.gradientDarkBlueMint, colors.gradientYellows, colors.gradientDustVioPink, colors.gradientBlueMint]
	const bgrounds = [
		colors.bottleGreen,
		colors.mintGreen,
		colors.eggplant,
		colors.darkVio,
		colors.midVio,
		colors.dustVio,
		colors.darkDustBlue,
		colors.dustBlue,
		colors.midBlue
	]
	const bg = []
	for(let i = 0; i < itemsNum; i++) {
		const randomIndex = Math.floor(Math.random() * bgrounds.length)
		bg.push(bgrounds[randomIndex])
	}

	// console.info(bg)
	return {bg}
}
