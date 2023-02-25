import React, {useEffect, useState} from "react";
import {gradients} from "../../style/vars-mixins/_index";

// Generates an array with randomized colors for items backgrounds, receiving their number as arg
export const generateRandomBg = (itemsNum) => {
	const bgrounds = [
		gradients.blueMint,
		gradients.blue,
		gradients.vioPink,
		gradients.mintVio,
		gradients.bluePink,
		gradients.pinkBlue,
		gradients.orangeVio,
		gradients.vioPistachio,
		gradients.pearl,
		gradients.redGreen,
		gradients.orangeTurq,
		gradients.crimsonTurq,
		gradients.turqGreen,
	];
	const bg = [];
	for(let i = 0; i < itemsNum; i++) {
		const randomIndex = Math.floor(Math.random() * bgrounds.length);
		bg.push(bgrounds[randomIndex]);
	}
	return bg;
};
