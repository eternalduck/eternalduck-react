import React, {useEffect, useState} from "react"
import {media, colors, mixins} from "../../style/vars-mixins/_index"

// Generates an array with randomized colors for items backgrounds, receiving their number as arg
export const generateRandomBg = (itemsNum) => {
	const bgrounds = [
		colors.gradientBlueMint,
		colors.gradientBlue,
		colors.gradientVioPink,
		colors.gradientMintVio,
		colors.gradientBluePink,
		colors.gradientPinkBlue,
		colors.gradientOrangeVio,
		colors.gradientVioPistachio,
		colors.gradientPearl,
		colors.gradientRedGreen,
		colors.gradientOrangeTurq,
		colors.gradientCrimsonTurq,
		colors.gradientTurgGreen,
	]
	const bg = []
	for(let i = 0; i < itemsNum; i++) {
		const randomIndex = Math.floor(Math.random() * bgrounds.length)
		bg.push(bgrounds[randomIndex])
	}
	return bg
}
