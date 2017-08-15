import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled('div') `
    height: 64px;
    width: 64px;
    background-color: rgba(155, 155, 155, 0.3);
    border-radius: 7px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
  `;

export default class ActionSlot extends React.Component {

  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}