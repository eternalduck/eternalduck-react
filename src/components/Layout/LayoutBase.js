import React from 'react'
// import ReactDOM from 'react-dom'

import css from '../../scss/main.scss'

const LayoutBase = (props) => {
	return (
		<div className={css.gridContainer}>
			<div className={css.gridContent}>
				{props.children}
			</div>
		</div>
	)
}

export default LayoutBase
