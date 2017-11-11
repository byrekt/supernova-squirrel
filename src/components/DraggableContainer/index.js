import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../constants'
import { DragSource } from 'react-dnd';

const Content = styled.div`
  background-color: rgba(155, 155, 155, 0.25);
  width: auto;
  margin-top: -2px;
  margin-left: 12px;
  max-width: fit-content;

  ${media.tablet} {
    min-width: 30px;
    min-height: 30px;
    border-radius: 3px;
    padding: 1px;
  }

  ${media.desktop} {
    min-width: 48px;
    min-height: 48px;
    border-radius: 8px;
    padding: 2px;
  }
`

const Grabber = styled.div`
  cursor: grab;
  width: 10px;
  height: 16px;
  padding-left: 5px;
  border-radius: 3px;
  background-color: rgba(155, 155, 255, 0.25);
`

const Container = styled.div`
  ${({ position }) => {
    if (position) {
      return `
        position: absolute;
        top: ${position.y}px;
        left: ${position.x}px;
      `
    }
  }}
`

const containerSource = {
  beginDrag(props) {
    console.log('starting drag')
    return props.children
  },
  endDrag(props, monitor) {

    console.log(props, monitor.getDifferenceFromInitialOffset())
    // if (!monitor.didDrop() && props.clearAction) {
    //   props.clearAction(props.setNumber, props.position);
    // }

    // Okay TODO I need to figure out how I am going to track where the bar should be.
  }
}

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class DraggableContainer extends React.Component {

  static propTypes = {
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  }

  state = {
    position: this.props.position
  }

  render() {

    const {
      position,
      connectDragSource,
      children
    } = this.props

    return connectDragSource(
      <div>
        <Container position={position}>
          <Grabber>
            •
        </Grabber>
          <Content>
            {children}
          </Content>
        </Container>
      </div>
    )
  }
}

export default DragSource('draggableContainer', containerSource, collect)(DraggableContainer);