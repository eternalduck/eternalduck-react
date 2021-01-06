import React from 'react'
// import ReactDOM from 'react-dom'
import styled from 'styled-components'

import {mixins, media} from '../../scss/vars-mixins/_index'

const ContentWide = (props) => {
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
`

const Content = styled.div`
	${mixins.out("solid", "orange")}
	${mixins.contentWide}
	${mixins.centered}
`
export default ContentWide
