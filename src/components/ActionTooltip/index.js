import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const tooltipWidth = 240;

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  .tooltip-content {
    visibility: hidden;
    min-width: ${tooltipWidth}px;
    background-color: white;
    border: 1px solid black;
    border-radius: 6px;
    padding: 1rem;

    top: -5px;
    left: 105%;
    position: absolute;
    z-index: 1;

  }

  &:hover {
    .tooltip-content {
      visibility: visible;
    }
  }
`

const StyledActionName = styled.div`
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const propTypes = {
  description: PropTypes.string.isRequired,
  recast: PropTypes.string,
  cast: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

class ActionTooltip extends React.Component {

  constructor(props) {
    super(props)

    this.getActionTooltip = this.getActionTooltip.bind(this)
    this.allowTooltip = this.allowTooltip.bind(this)
    this.disableTooltip = this.disableTooltip.bind(this)
    this.state = {
      disableTooltip: false
    }
  }

  getActionTooltip() {
    const { description, recast, cast, name } = this.props
    const tooltipContent = description.split('<br>');

    if (recast) {
      tooltipContent.unshift(`Recast: ${recast}`);
    }
    if (cast) {
      tooltipContent.unshift(`Cast: ${recast}`);
    }
    const sexyTooltipContent = tooltipContent.map(tip => {
      // If the tip has a colon in it, let's bold what's before the colon;
      if (tip.indexOf(':') !== -1) {
        const tipContent = tip.split(':');
        tipContent[0] = `<strong>${tipContent[0]}</strong>`;
        tip = tipContent.join(':');
      }
      return `<div class="tooltip-tip">${tip}</div>`;
    });

    const sexyTooltip = sexyTooltipContent.join('');
    return (
      <div>
        <StyledActionName>
          {name}
        </StyledActionName>
        <div dangerouslySetInnerHTML={{ __html: sexyTooltip }} />
      </div>
    )
  }

  disableTooltip() {
    console.log('disableTooltip called')
    this.setState({
      disableTooltip: true
    })
  }

  allowTooltip() {
    console.log('allowTooltip called')
    this.setState({
      disableTooltip: false
    })
  }

  render() {
    if (!this.props.children) return null
    return (
      <StyledTooltip onMouseDown={this.disableTooltip} onMouseUp={this.allowTooltip} onMouseOut={this.allowTooltip}>
        {this.props.children}
        {!this.state.disableTooltip &&
          <span className="tooltip-content">
            {this.getActionTooltip()}
          </span>
        }
      </StyledTooltip>
    )
  }

}

ActionTooltip.propTypes = propTypes

export default ActionTooltip