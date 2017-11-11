import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../constants'
import { DropTarget } from 'react-dnd'

const hudSpec = {
  drop(props, monitor, component) {
    console.log('dropped')
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const HudContainer = styled.div`
  width: 920px;
  height: 500px;
  background-color: rgba(155, 155, 155, 0.2);

  ${media.tablet} {
    border-radius: 3px;
  }

  ${media.desktop} {
    border-radius: 8px;
  }
`

class Hud extends React.Component {

  render () {
    const {
      connectDropTarget,
      children
    } = this.props

    return connectDropTarget(
      <HudContainer>
        {children}
      </HudContainer>
    )
  }
}

export default DropTarget('draggableContainer', hudSpec, collect)(HudContainer)