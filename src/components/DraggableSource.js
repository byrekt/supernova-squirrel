import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const propTypes = {
  preventDrag: PropTypes.bool,
  connectDragSource: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
// React-DND handlers
const draggableSource = {
  beginDrag(props) {
    return {
      children: props.children
    };
  },
  endDrag(props, monitor) {
    console.log('endDrag')
  }
}


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
  }
}

class DraggableSource extends React.Component {

  render() {
    const { connectDragSource, preventDrag, children } = this.props
    // If the icon is draggable, connect the DragSource
    if (!preventDrag) {
      return connectDragSource(
        <div>
          {children}
        </div>
      )
    } else {
      // If the icon is not dragable, don't connect DragSource and set draggable to false
      return <div draggable={false}>{children}</div>
    }
  }
}

DraggableSource.propTypes = propTypes

export default DragSource('action', draggableSource, collect)(DraggableSource);