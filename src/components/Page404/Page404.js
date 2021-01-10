import React, { useState, useEffect } from 'react'
import ContentWidth from '../Layout/ContentWidth'

const Page404 = (props) => {
	useEffect(() => {
		// document.body.className = cssP.page404
	})
	return(
		<ContentWidth>
			<p>OH NO!..</p>
		</ContentWidth>
	)
}

export default Page404
// .page404 {
// 	background: #9a22a8;
// 	p {
// 		color: #7ccf47;
// 		font-size: 200px;
// 		font-weight: 900;
// 	}
// }
