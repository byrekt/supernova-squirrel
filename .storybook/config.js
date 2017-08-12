import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import styled, { ThemeProvider } from 'styled-components'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import theme from '../src/theme'


const DnDContextWrapper = DragDropContext(HTML5Backend)('div')

const StyledAppContainer = styled.div`
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[2]}px;
`

const Decorator = props => (
  <ThemeProvider theme={theme}>
    <DnDContextWrapper>
      <StyledAppContainer>
        {props.children}
      </StyledAppContainer>
    </DnDContextWrapper>
  </ThemeProvider>
)
addDecorator(story => (
  <Decorator children={story()} />
))


const req = require.context('../src/components', true, /story\.js$/);

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)