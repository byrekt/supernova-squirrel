import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 7px;
`

const propTypes = {
  // The path to the image source
  icon: PropTypes.string.isRequired
}
const ActionIcon = ({ icon }) => <StyledIcon src={icon} />

ActionIcon.propTypes = propTypes

export default ActionIcon