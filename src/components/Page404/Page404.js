import React, { useState, useEffect } from 'react'
import ContentWidth from '../Layout/ContentWidth'

import css from '../../scss/main.scss'

import cssP from './page404.scss'

const Page404 = (props) => {
	useEffect(() => {
		document.body.className = cssP.page404
	})
	return(
		<ContentWidth>
			<p>OH NO!..</p>
		</ContentWidth>
	)
}

export default Page404
