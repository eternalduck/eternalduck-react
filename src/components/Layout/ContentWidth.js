import React from 'react'
// import ReactDOM from 'react-dom'
import styled from 'styled-components'

import {mixins} from '../../scss/vars-mixins/_index'

const ContentWidth = (props) => {
	return (
		<Container bg={props.bg}>
			<Content>
				{props.children}
			</Content>
		</Container>
	)
}

const Container = styled.div`
	background: ${props => props.bg}
	// ${mixins.gridContainer(". content .", "1fr", "15px 1fr 15px")}
`
const Content = styled.div`
	${mixins.out("solid", "yellow")}
	${mixins.contentWidth}
	${mixins.centered}
	//grid-area: content;
`

export default ContentWidth
