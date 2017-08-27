import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import ActionSlot from '../ActionSlot'
import ActionIcon from '../ActionIcon'
import ActionTooltip from '../ActionTooltip'

const CrossHotbar = styled.div`
  display: flex;
`

export default class Hotbar extends React.PureComponent {

  static propTypes = {

    /**
     * Which Bar this crossbar represents.
     */
    barNumber: PropTypes.number,
    /**
     * Whether the cross hotbar is a half size cross hotbar.
     */
    quarter: PropTypes.bool,
    /**
     * Whether the cross hotbar is a quarter size cross hotbar.
     */
    quarter: PropTypes.bool,
    /**
     * The sparse array of actions..
     */
    actions: (props, propName, componentName) => {
      let expectedSize

      if (props['quarter']) {
        expectedSize = 4
      } else if (props['half']) {
        expectedSize = 8
      } else {
        expectedSize = 16
      }
      if (!(props[propName] instanceof Array && props[propName].length === expectedSize)) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed. Should be an array of ' + expectedSize + ' elements.'
        );
      }
    }
  }
  render() {

    return (
      <CrossHotbar>
        {this.props.actions && this.props.actions.map((action, index) => {

          return (
            <ActionSlot key={`action-slot-${this.props.barNumber}-${index}`}>
              {action.icon && (
                <ActionTooltip description={action.tooltip} cast={action.cast} recast={action.recast} name={action.name}>
                  <ActionIcon icon={action.icon} draggable={action.draggable} />
                </ActionTooltip>
              )}
            </ActionSlot>
          )
        })}
      </CrossHotbar>
    )
  }
}