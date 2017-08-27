import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import ActionSlot from '../ActionSlot'
import ActionIcon from '../ActionIcon'
import ActionTooltip from '../ActionTooltip'

const VerticalHotbar = styled.div`
  display: flex;
  flex-direction: column;
`

const HorizontalHotbar = styled.div`
  display: flex;
`
export default class Hotbar extends React.PureComponent {

  static propTypes = {
    /**
     * Whether or not the bar is vertical
     */
    vertical: PropTypes.bool,
    /**
     * Which Bar this hotbar represents.
     */
    barNumber: PropTypes.number,
    /**
     * The sparse array of actions. Should always contain 12 elements.
     */
    actions: (props, propName, componentName) => {
      if (!(props[propName] instanceof Array && props[propName].length === 12)) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed. Should be an array of 12 elements.'
        );
      }
    }
  }
  render() {

    const Bar = (this.props.vertical) ? VerticalHotbar : HorizontalHotbar

    return (
      <Bar>
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
      </Bar>
    )
  }
}