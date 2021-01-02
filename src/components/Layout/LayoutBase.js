import React from 'react'
// import ReactDOM from 'react-dom'
import styled from 'styled-components'

import {mixinContentWidth} from '../../scss/vars-mixins/_index'

const LayoutBase = (props) => {
	return (
		<GridContainer>
			<GridContent>
				{props.children}
			</GridContent>
		</GridContainer>
	)
}

const GridContainer = styled.div`
	//display: grid;
	//grid-template: ". content ." 1fr / 15px 1fr 15px;
	//justify-items: center;
	width: 100%;
`
const GridContent = styled.div`
	//grid-area: content;
	${mixinContentWidth};
`

export default LayoutBase
