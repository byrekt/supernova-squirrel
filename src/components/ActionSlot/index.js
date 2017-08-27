import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { media } from '../../constants'

const Container = styled('div') `
    height: 20px;
    width: 20px;
    background-color: rgba(155, 155, 155, 0.3);
    border-radius: 3px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.4);
    margin: 2px;

    ${media.tablet} {
      border-radius: 3px;
      height: 46px;
      width: 46px;
    }
    ${media.desktop} {
      height: 64px;
      width: 64px;
    }
  `;

  // Todo make this a stateless component maybe
export default class ActionSlot extends React.PureComponent {
  static propTypes = {
    position: PropTypes.oneOf([ 'LAD', 'LAL', 'LAR', 'LAU', 'LDD', 'LDL', 'LDR', 'LDU', 'RAD', 'RAL', 'RAR', 'RAU', 'RDD', 'RDL', 'RDR', 'RDU', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  }
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}