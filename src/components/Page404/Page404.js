import React, { useState, useEffect } from 'react'
import LayoutBase from '../Layout/LayoutBase'

import css from '../../scss/main.scss'

import cssP from './page404.scss'

const Page404 = (props) => {
	useEffect(() => {
		document.body.className = cssP.page404
	})
	return(
		<LayoutBase>
			<p>OH NO!..</p>
		</LayoutBase>
	)
}

export default Page404
