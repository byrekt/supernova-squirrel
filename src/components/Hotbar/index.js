import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import ActionSlot from '../ActionSlot'
import ActionIcon from '../ActionIcon'
import ActionTooltip from '../ActionTooltip'
import { media } from '../../constants'

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.tablet} {
    width: ${({width}) => `${(408 * (width / 12))}px`};
  }
  ${media.desktop} {
    width: ${({width}) => `${(624 * (width / 12))}px`};
  }

`

export default class Hotbar extends React.PureComponent {

  static propTypes = {
    /**
     * Number of rows in the hotbar
     */
    width: PropTypes.oneOf([1, 2, 6, 12]),
    children: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf([ActionSlot])
    }))
  }

  static defaultProps = {
    height: 1
  }

  render() {

    return (
      <Bar width={this.props.width}>
        {this.props.children}
      </Bar>
    )
  }
}