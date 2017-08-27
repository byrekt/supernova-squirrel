import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.img`
  max-width: 100%;
  min-height: fill-available;
  border-radius: 7px;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
`

const propTypes = {
  // The path to the image source
  icon: PropTypes.string.isRequired,
  draggable: PropTypes.bool
}
const ActionIcon = ({ icon, draggable }) => <StyledIcon src={icon} draggable={draggable}/>

ActionIcon.propTypes = propTypes

export default ActionIcon